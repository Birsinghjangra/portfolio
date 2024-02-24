import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { ExperienceComponent } from './frontend/experience/experience.component';
import { CertificationsComponent } from './frontend/certifications/certifications.component';
import { SkillsComponent } from './frontend/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            CommonModule,
            RouterOutlet,
            HeaderComponent,
            FooterComponent,
            ContactComponent,
            HomeComponent,
            AboutComponent,
            ExperienceComponent,
            CertificationsComponent,
            SkillsComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
