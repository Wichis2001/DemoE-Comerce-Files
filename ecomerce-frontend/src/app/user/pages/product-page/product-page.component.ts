import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.intarface';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styles: [
  ]
})
export class ProductPageComponent implements OnInit{
  public producto?: Producto;
  imagenUrl: string = '';

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  miFormulario: FormGroup = this.fb.group({
    existenciaLlevar: [ '', [Validators.required, Validators.minLength( 1 )]]
  });

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.productoService.getProductoByID( id )),
      )
      .subscribe( producto => {

        if ( !producto ) return this.router.navigate([ '/user/list' ]);

        this.producto = producto;

        this.productoService.getImgById(this.producto!._id).subscribe(
          blob => {
            if (blob) {
              this.imagenUrl = URL.createObjectURL(blob);
              console.log( this.imagenUrl )
            }
          },
          error => console.error(error)
        );
        return;
      })
  }

  goBack():void {
    this.router.navigateByUrl('user/list')
  }

  agregar(): void {

  }

}
