import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Categoria, Producto, TipoCategoria } from '../../interfaces/producto.intarface';
import { filter, switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styles: [`

  `]
})
export class AddPageComponent {
  miFormulario: FormGroup = this.fb.group({
          _id:          [''],
          nombre:       ['', [Validators.required, Validators.minLength(4)]],
          descripcion:  ['', [Validators.required, Validators.minLength(10)]],
          precio:       new FormControl<number>(1, {
                            validators: [Validators.required, Validators.min(1)]
                        }),
          existencia:   new FormControl<number>(1, {
                            validators: [Validators.required, Validators.min(1)]
                        }),
          categoria: new FormControl<Categoria>( Categoria.Decoración ),
  });

  public categorias!: TipoCategoria[];
  public imagenSubir!: File;
  public imgTemp: any = null;


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
          return this.router.navigateByUrl('/sales');
        }

        this.miFormulario.reset( producto );
        return;
      });

  }

  onSubmit() {
    if ( this.miFormulario.invalid ) return;

    if ( this.currentProducto._id ) {
      //this.heroesService.updateHero( this.currentHero )
      //  .subscribe( hero => {
      //    this.showSnackbar(${ hero.superhero } updated!);
      //  });

      return;
    }
    console.log( this.currentProducto );
    this.productoService.addProducto( this.currentProducto )
      .subscribe( producto => {
        // TODO: mostrar snackbar, y navegar a /heroes/edit/ hero.id
       this.router.navigate(['/user/edit', producto._id ]);
       this.showSnackbar(`${ producto.nombre } creado con éxito!`);
      });


  }

  onDeleteProducto() {
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
    this.snackbar.open( message, 'ok', {
      duration: 2500,
    })
  }

  cambiarImagen( event: any ) {
    // El archivo seleccionado es una imagen
    if (event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type.indexOf('image') !== -1) {
        this.imagenSubir = selectedFile;
        const reader = new FileReader();
        reader.readAsDataURL( selectedFile );

        reader.onloadend = () => {
          this.imgTemp = reader.result;
        }
        this.showSnackbar('Imagen cargada correctamente')

      } else {
        // El archivo seleccionado no es una imagen
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El archivo seleccionado no tiene un formato valido',
        })
      }
      this.imagenSubir = event.target.files[0];


    } else {
      this.imgTemp = null;
    }



  }



}

