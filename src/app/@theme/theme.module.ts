import { NgModule } from "@angular/core";
import { MatButtonModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const MATERIAL_MODULE = [
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule
]

@NgModule({
  imports: [...BASE_MODULES, ...MATERIAL_MODULE],
  exports: [...BASE_MODULES, ...MATERIAL_MODULE]
})

export class ThemeModule {}