import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Categoria, Producto, TipoCategoria } from '../../interfaces/producto.intarface';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styles: [
  ]
})
export class AddPageComponent {
  miFormulario: FormGroup = this.fb.group({
          _id:          [''],
          nombre:       [ '', [Validators.required], [Validators.minLength(4)] ],
          descripcion:  [ '', [Validators.required], [Validators.minLength(10)] ],
          img:          new FormControl(''),
          precio:       new FormControl<number>(1, {
                            validators: [Validators.required, Validators.min(1)]
                        }),
          existencia:   new FormControl<number>(1, {
                            validators: [Validators.required, Validators.min(1)]
                        }),
          categoria:    new FormControl<Categoria>( Categoria.Tecnología )


  });

  public categorias!: TipoCategoria[];


  constructor( private productoService: ProductoService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackbar: MatSnackBar,
               private dialog: MatDialog,
               private fb: FormBuilder) {}

  get currentProducto(): Producto {
    const producto = this.miFormulario.value as Producto;
    return producto;
  }

  ngOnInit(): void {

    this.productoService.getCategorias()
                            .subscribe( categorias => this.categorias = categorias );

    if ( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.productoService.getProductoByID( id ) ),
      ).subscribe( producto => {

        if ( !producto ) {
          return this.router.navigateByUrl('/');
        }

        this.miFormulario.reset( producto );
        return;
      });

  }



  onSubmit():void {

    if ( this.miFormulario.invalid ) return;

    if ( this.currentProducto._id ) {
      this.productoService.updateProducto( this.currentProducto )
        .subscribe( producto => {
          this.showSnackbar(`${ producto.nombre } actualizado!`);
        });

      return;
    }

    this.productoService.addProducto( this.currentProducto )
      .subscribe( producto => {
        // TODO: mostrar snackbar, y navegar a /heroes/edit/ hero.id
        this.router.navigate(['/user/edit', producto._id ]);
        this.showSnackbar(`${ producto.nombre } agregado con éxito!`)
      });
  }

  onDeleteHero() {
    if ( !this.currentProducto._id ) throw Error('Hero id is required');

    const dialogRef = this.dialog.open( ConfirmDialogComponent, {
      data: this.miFormulario.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.productoService.deleteProductoById( this.currentProducto._id )),
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });


  }


  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }

}

