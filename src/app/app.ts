import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot, TUI_DARK_MODE } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TransMaker');
  protected readonly darkMode = inject(TUI_DARK_MODE);
}
