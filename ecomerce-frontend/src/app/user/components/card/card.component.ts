import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.intarface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() producto!: Producto;
  imagenObservable!: Observable<Blob|undefined>;

  miFormulario: FormGroup = this.fb.group({
    existenciaLlevar: [ '1', [Validators.required, Validators.minLength( 1 )]]
  });

  imagenUrl: string = '';
  constructor( private fb: FormBuilder,
               private productoService: ProductoService ){}

  ngOnInit(): void {
    if ( !this.producto ) throw Error('Producto property is required');

    this.productoService.getImgById(this.producto._id).subscribe(
      blob => {
        if (blob) {
          this.imagenUrl = URL.createObjectURL(blob);
          console.log( this.imagenUrl )
        }
      },
      error => console.error(error)
    );

  }

  agregar(): void {

  }



}
