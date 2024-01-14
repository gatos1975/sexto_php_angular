import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { ProductosService } from '../../Services/productos.service';
import { IProductos } from 'src/app/Interface/iproductos';
import { ProveedorService } from '../../Services/proveedores.service';
import { Iproveedor } from 'src/app/Interface/iproveedor';
import { stockService } from '../../Services/stocks.service';
import { Stock } from 'src/app/Interface/stock';
interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  productos: IProductos[];
  proveedores: Iproveedor[];
  stocks: Stock[];
  constructor(
    //private chartsData: DashboardChartsData,
    private productosServicio: ProductosService,
    private proveedorServicio: ProveedorService,
    private stockServicio: stockService
  ) {}

  
  ngOnInit(): void {
    this.cargalista();
    this.cargalistaprov();
    this.cargalistastock();
    //this.initCharts();
  }
  private cargalista() {
    this.productosServicio.todos().subscribe((data) => {
      console.log(data);
      this.productos = data;
    });
  }
  private cargalistaprov() {
    this.proveedorServicio.todos().subscribe((data) => {
      console.log(data);
      this.proveedores = data;
    });
  }
  
  private cargalistastock() {
    this.stockServicio.todos().subscribe((data) => {
      console.log(data);
      this.stocks = data;
    });
  }
}
