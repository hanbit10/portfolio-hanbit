import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private currentLanguage = 'en';
  private translations: any = {
    en: {
      header: {
        nav1: 'About me',
        nav2: 'Skills',
        nav3: 'Portfolio',
        nav4: 'Contact',
      },
      profile: {
        button: "Let's talk!",
      },
      about: {
        title: 'About Me',
        text1:
          'I am a frontend developer based in Aachen, with a degree in Informatics from RWTH Aachen University and a completed bootcamp from Developer Akademie. I thrive in frontend development, focusing on creating intuitive and engaging user interfaces. I am passionate about continuous learning and staying updated with the latest industry trends.',
        text2:
          'I create innovative and user-friendly web solutions. My designs are both functional and engaging, ensuring efficiency and appeal.',
        text3:
          'I use fundamental technologies like HTML, CSS, and JavaScript for the web development.',
      },
      skills: {
        title: 'My Skills',
        text1:
          'I have gained experience in building projects with various front end technologies and concepts.',
        button1: 'Get in touch',
      },
      portfolio: {
        title: 'Portfolio',
        text1:
          'Explore a selection of my work here - Interact with projects to see my skills in action.',
        button1: 'Live test',
        button2: 'Github',
        portfolio1: {
          title: 'Join',
          skills: 'Angular | TypeScript | HTML | CSS | Firebase',
          text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        },
        portfolio2: {
          title: 'El Polo Loco',
          skills: 'JavaScript | HTML | CSS',
          text: 'Jump and Run Game with object-oriented approach. Help Pepe find coins and throw Tabasco bottles to fight against the crazy chicken.',
        },
        portfolio3: {
          title: 'Simple CRM',
          skills: 'Angular | Firebase',
          text: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
        },
        portfolio4: {
          title: 'Pokédex',
          skills: 'JavaScript | HTML | CSS | API',
          text: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
        },
      },
      contact: {
        title: 'Contact',
        subtitle: 'Got a problem to solve?',
        text1:
          'Contact me through this form, I am interested in hearing from you, knowing your ideas, and contributing to your projects with my work.',
        text2: 'Need a Frontend developer? Contact me!',
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        send: 'Send message',
        contact: 'Contact',
        privacy1: "I've read the",
        privacy2: 'privacy policy',
        privacy3: 'and agree to the processing of my data as outlined',
      },
    },
    de: {
      header: {
        nav1: 'Über mich',
        nav2: 'Skills',
        nav3: 'Portfolio',
        nav4: 'Kontakt',
      },
      profile: {
        button: 'Lass uns reden!',
      },
      about: {
        title: 'Über mich',
        text1:
          'Ich bin ein Frontend-Entwickler aus Aachen mit einem Abschluss in Informatik der RWTH Aachen und einem abgeschlossenen Bootcamp von der Developer Akademie. Ich blühe in der Welt der Frontend-Entwicklung auf und konzentriere mich auf die Erstellung intuitiver und ansprechender Benutzeroberflächen. Ich bin leidenschaftlich daran interessiert, kontinuierlich zu lernen und mich über die neuesten Branchentrends auf dem Laufenden zu halten.',
        text2:
          'Ich erstelle innovative und benutzerfreundliche Weblösungen. Meine Designs sind sowohl funktional als auch ansprechend und sorgen für Effizienz und Attraktivität.',
        text3:
          'Ich verwende grundlegende Technologien wie HTML, CSS und JavaScript für die Webentwicklung.',
      },
      skills: {
        title: 'Meine Skills',
        text1:
          'Ich habe Erfahrung im Aufbau von Projekten mit verschiedenen Frontend-Technologien und Konzepten gesammelt.',
        button1: 'Kontakt aufnehmen',
      },
      portfolio: {
        title: 'Portfolio',
        text1:
          'Entdecken Sie hier eine Auswahl meiner Arbeiten - Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.',
        button1: 'Live Test',
        button2: 'Github',
        portfolio1: {
          title: 'Join',
          skills: 'Angular | TypeScript | HTML | CSS | Firebase',
          text: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
        },
        portfolio2: {
          title: 'El Polo Loco',
          skills: 'JavaScript | HTML | CSS',
          text: 'Jump and Run-Spiel mit objektorientiertem Ansatz. Helfen Sie Pepe, Münzen zu finden und Tabasco-Flaschen zu werfen, um gegen das verrückte Huhn zu kämpfen.',
        },
        portfolio3: {
          title: 'Simple CRM',
          skills: 'Angular | Firebase',
          text: 'Ein sehr einfaches Customer Relationship Management System mit CRUD-Funktionalität.',
        },
        portfolio4: {
          title: 'Pokédex',
          skills: 'JavaScript | HTML | CSS | API',
          text: 'Basierend auf der PokéAPI, eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
        },
      },
      contact: {
        title: 'Kontakt',
        subtitle: 'Haben Sie ein Problem zu lösen?',
        text1:
          'Kontaktieren Sie mich über dieses Formular, ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen zu erfahren und mit meiner Arbeit zu Ihren Projekten beizutragen.',
        text2:
          'Benötigen Sie einen Frontend-Entwickler? Kontaktieren Sie mich!',
        name: 'Ihr Name',
        email: 'Ihre E-Mail',
        message: 'Ihre Nachricht',
        send: 'Nachricht senden',
        contact: 'Kontakt',
        privacy1: 'Ich habe die',
        privacy2: 'Datenschutzerklärung',
        privacy3:
          'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu',
      },
    },
  };
  constructor() {}

  getTranslation(key: string): string {
    const keys = key.split('.');
    let translation = this.translations[this.currentLanguage];

    for (const k of keys) {
      if (translation[k]) {
        translation = translation[k];
      } else {
        return key; // Return the key if translation not found
      }
    }

    return translation;
  }

  setLanguage(language: string) {
    this.currentLanguage = language;
  }

  getLanguage(): string {
    return this.currentLanguage;
  }
}
