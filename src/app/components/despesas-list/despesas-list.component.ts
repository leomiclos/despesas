import { Component } from '@angular/core';
import { DespesasService } from '../../services/despesas.service';
import { Despesa } from '../../model/despesa';

@Component({
  selector: 'app-despesas-list',
  standalone: true,
  imports: [],
  templateUrl: './despesas-list.component.html',
  styleUrl: './despesas-list.component.css'
})
export class DespesasListComponent {

  despesas: Despesa[] = []

  constructor(
    private despesaService: DespesasService
  ){}

  ngOnInit() {
    this.getAllDespesas()
  }

  getAllDespesas(){
    this.despesaService.getDespesas().subscribe(res => {
      this.despesas = res
      console.log(this.despesas);

    })
  }

}
