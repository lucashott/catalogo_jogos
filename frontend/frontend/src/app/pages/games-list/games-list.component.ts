import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game.model';


@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  private fb = inject(FormBuilder);
  private api = inject(GamesService);

  jogos: Game[] = [];
  carregando = false;
  erro: string | null = null;
  editandoId: number | null = null;

  form: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    tipo: ['', [Validators.required, Validators.minLength(2)]],
    ano: [2000, [Validators.required, Validators.min(1950), Validators.max(2100)]]
  });

  ngOnInit(): void { this.carregar(); }

  carregar(): void {
    this.carregando = true;
    this.erro = null;
    this.api.list().subscribe({
      next: data => { this.jogos = data; this.carregando = false; },
      error: () => { this.erro = 'Falha ao carregar jogos.'; this.carregando = false; }
    });
  }

  enviar(): void {
    if (this.form.invalid) return;
    const payload = this.form.getRawValue() as Game;

    if (this.editandoId) {
      this.api.get(this.editandoId).subscribe({
        next: () => {
          this.api.update(this.editandoId!, payload).subscribe({
            next: () => { this.cancelarEdicao(); this.carregar(); },
            error: () => this.erro = 'Falha ao atualizar jogo.'
          });
        },
        error: () => this.erro = 'Jogo não encontrado para edição.'
      });
    } else {
      this.api.create(payload).subscribe({
        next: () => { this.form.reset({ nome: '', tipo: '', ano: 2000 }); this.carregar(); },
        error: (e: any) => this.erro = e?.error?.error || 'Falha ao criar jogo.'
      });
    }
  }

  editar(j: Game): void {
    if (!j.id) return;
    this.editandoId = j.id;
    this.api.get(j.id).subscribe({
      next: data => this.form.patchValue(data),
      error: () => this.erro = 'Falha ao buscar jogo para edição.'
    });
  }

  cancelarEdicao(): void {
    this.editandoId = null;
    this.form.reset({ nome: '', tipo: '', ano: 2000 });
  }

  excluir(j: Game): void {
    if (!j.id) return;
    if (!confirm(`Excluir o jogo "${j.nome}"?`)) return;
    this.api.remove(j.id).subscribe({
      next: () => this.carregar(),
      error: () => this.erro = 'Falha ao excluir jogo.'
    });
  }

  get f() { return this.form.controls; }
}
