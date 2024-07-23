const texts = {
  en: {
    header: {
      nav1: 'About me',
      nav2: 'Skills',
      nav3: 'Portfolio',
      nav4: 'Contact',
    },
    profile: {
      button: "Let's talk!",
      scroll: 'Scroll down',
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
    footer: {
      imprint: 'Imprint',
    },
    imprint: {
      title: 'Imprint',
      info: ['Hanbit Chang', 'Alexianergraben', '40', '52062 Aachen'],
      contact: ['Contact', 'Phone: 015774128843', 'Email: chanbit10@gmail.com'],
      quelle: ['Source:', 'https://www.e-recht24.de/impressum-generator.html'],
    },
    privacy: {
      title: 'Privacy Policy',
      'kapitel 1': {
        title: '1. Data Protection at a Glance',
        '1.1': {
          title: 'General Information',
          p: 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data are all data with which you can be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.',
        },
        '1.2': {
          title: 'Data Collection on this Website',
          subtitle1: 'Who is responsible for data collection on this website?',
          p1: 'The data processing on this website is carried out by the website operator. Their contact details can be found in the section "Notice concerning the responsible party" in this privacy policy.',
          subtitle2: 'How do we collect your data?',
          'p2.1':
            'Your data is collected firstly by you providing it to us. This can be data that you enter in a contact form, for example.',
          'p2.2':
            'Other data are collected automatically or after your consent when you visit the website by our IT systems. These are mainly technical data (e.g. internet browser, operating system or time of the page view). This data is collected automatically as soon as you enter this website.',
          subtitle3: 'What do we use your data for?',
          p3: 'Part of the data is collected to ensure the error-free provision of the website. Other data can be used to analyze your user behavior.',
          subtitle4: 'What rights do you have regarding your data?',
          'p4.1':
            'You have the right to obtain information about the origin, recipient and purpose of your stored personal data at any time free of charge. You also have the right to request the correction or deletion of these data. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.',
          'p4.2':
            'For this and for further questions on the subject of data protection, you can contact us at any time.',
        },
      },
      'kapitel 2': {
        title: '2. Hosting',
        p: 'We host the content of our website with the following provider:',
        '2.2': 'All-Inkl',
        p2: "The provider is ALL-INKL.COM - Neue Medien Münnich, owner René Münnich, Hauptstraße 68, 02742 Friedersdorf (hereinafter All-Inkl). Details can be found in All-Inkl's privacy policy:",
        link: 'https://all-inkl.com/datenschutzinformationen/',
        p3: "The use of All-Inkl is based on Art. 6 para. 1 lit. f GDPR. We have a legitimate interest in the most reliable presentation of our website possible. If appropriate consent has been requested, processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDG, insofar as the consent includes the storage of cookies or access to information on the user's terminal device (e.g. device fingerprinting) within the meaning of the TDDG. The consent can be revoked at any time.",
      },
      'kapitel 3': {
        title: '3. General Information and Mandatory Information',
        '3.1': {
          title: 'Data Protection',
          p1: 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.',
          p2: 'When you use this website, various personal data are collected. Personal data are data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.',
          p3: 'We would like to point out that data transmission over the Internet (e.g. when communicating by e-mail) can have security gaps. A complete protection of the data against access by third parties is not possible.',
        },
        '3.2': {
          title: 'Notice Concerning the Responsible Party',
          p: 'The responsible party for data processing on this website is:',
          name: 'Hanbit Chang',
          adresse: 'Alexianergraben 40<br />52062 Aachen',
          telefon: 'Phone: +49 (0) 15774128843',
          mail: 'Email: chanbit10@gmail.com',
          p2: 'The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, e-mail addresses, etc.).',
        },
        '3.3': {
          title: 'Storage Duration',
          p: 'Unless a more specific storage period is mentioned within this privacy policy, your personal data will remain with us until the purpose for data processing ceases to apply. If you make a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. retention periods under tax or commercial law); in the latter case, the deletion will take place after these reasons cease to apply.',
        },
        '3.4': {
          title:
            'General Information on the Legal Basis for Data Processing on this Website',
          p: 'If you have consented to data processing, we process your personal data on the basis of Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR if special data categories according to Art. 9 para. 1 GDPR are processed. In the case of explicit consent to the transfer of personal data to third countries, the data processing is also carried out on the basis of Art. 49 para. 1 lit. a GDPR. If you have consented to the storage of cookies or to access to information on your terminal device (e.g. via device fingerprinting), the data processing is additionally carried out on the basis of § 25 para. 1 TDDG. The consent can be revoked at any time. If your data is required for the performance of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6 para. 1 lit. b GDPR. Furthermore, we process your data if this is necessary for the fulfilment of a legal obligation on the basis of Art. 6 para. 1 lit. c GDPR. Data processing may also be carried out on the basis of our legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR. The relevant legal bases for each individual case are explained in the following paragraphs of this privacy policy.',
        },
        '3.5': {
          title: 'Recipients of Personal Data',
          p: 'In the course of our business activities, we work with various external parties. In some cases, it is also necessary to transmit personal data to these external parties. We only pass on personal data to external parties if this is necessary in the context of contract execution, if we are legally obliged to do so (e.g. transfer of data to tax authorities), if we have a legitimate interest in the transfer according to Art. 6 para. 1 lit. f GDPR or if another legal basis permits the data transfer. When using processors, we only pass on personal data of our customers on the basis of a valid contract for order processing. In the case of joint processing, a contract for joint processing is concluded.',
        },
        '3.6': {
          title: 'Revocation of Your Consent to Data Processing',
          p: 'Many data processing operations are only possible with your express consent. You can revoke an already given consent at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.',
        },
        '3.7': {
          title:
            'Right to Object to Data Collection in Special Cases and to Direct Advertising (Art. 21 GDPR)',
          p1: 'IF THE DATA PROCESSING IS BASED ON ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH A PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS OR THE PROCESSING IS FOR THE PURPOSE OF ASSERTING, EXERCISING OR DEFENDING LEGAL CLAIMS (OBJECTION UNDER ART. 21 PARA. 1 GDPR).',
          p2: 'IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING, INSOFAR AS IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION UNDER ART. 21 PARA. 2 GDPR).',
        },
        '3.8': {
          title: 'Right of Appeal to the Competent Supervisory Authority',
          p: 'In the event of violations of the GDPR, data subjects have a right of appeal to a supervisory authority, in particular in the Member State of their habitual residence, place of work or place of the alleged violation. The right of appeal exists without prejudice to other administrative or judicial remedies.',
        },
        '3.9': {
          title: 'Right to Data Portability',
          p: 'You have the right to have data that we process automatically on the basis of your consent or in fulfilment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done to the extent that it is technically feasible.',
        },
        '3.10': {
          title: 'Information, Deletion and Correction',
          p: 'Within the framework of the applicable legal provisions, you have the right to free information about your stored personal data, their origin and recipient and the purpose of the data processing and, if applicable, a right to correction or deletion of these data at any time. For this purpose and for further questions on the subject of personal data, you can contact us at any time.',
        },
        '3.11': {
          title: 'Right to Restriction of Processing',
          p1: 'You have the right to request the restriction of the processing of your personal data. For this purpose, you can contact us at any time. The right to restriction of processing exists in the following cases:',
          p2: 'If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the verification, you have the right to request the restriction of the processing of your personal data.',
          p3: 'If the processing of your personal data happened/is happening unlawfully, you can request the restriction of data processing instead of deletion.',
          p4: 'If we no longer need your personal data, but you need it to exercise, defend or assert legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.',
          p5: 'If you have lodged an objection pursuant to Art. 21 para. 1 GDPR, a balance must be struck between your interests and ours. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.',
          p6: 'If you have restricted the processing of your personal data, these data - apart from their storage - may only be processed with your consent or for the assertion, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or a Member State.',
        },
        kapitel4: {
          title: '4. Data Collection on this Website',
          '4.1': {
            title: 'Contact Form',
            p1: 'If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.',
            p2: 'The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your inquiry is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; the consent can be revoked at any time.',
            p3: 'The data you enter in the contact form will remain with us until you request us to delete it, revoke your consent to store it, or the purpose for storing the data no longer applies (e.g. after your request has been processed). Mandatory legal provisions - especially retention periods - remain unaffected.',
          },
          '4.2': {
            title: 'Inquiry by E-Mail, Telephone or Fax',
            p1: 'If you contact us by e-mail, telephone or fax, your inquiry, including all resulting personal data (name, inquiry), will be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent.',
            p2: 'The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your inquiry is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; the consent can be revoked at any time.',
            p3: 'The data you send to us via contact inquiries will remain with us until you request us to delete it, revoke your consent to store it, or the purpose for storing the data no longer applies (e.g. after your request has been processed). Mandatory legal provisions - especially statutory retention periods - remain unaffected.',
            quelle: 'Source:',
            link: 'https://www.e-recht24.de',
          },
        },
      },
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
      scroll: 'Nach unten scrollen',
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
      text2: 'Benötigen Sie einen Frontend-Entwickler? Kontaktieren Sie mich!',
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
    footer: {
      imprint: 'Impressum',
    },
    imprint: {
      title: 'Impressum',
      info: ['Hanbit Chang', 'Alexianergraben', '40', '52062 Aachen'],
      contact: [
        'Kontakt',
        'Telefon: 015774128843',
        'E-Mail: chanbit10@gmail.com',
      ],
      quelle: ['Quelle:', 'https://www.e-recht24.de/impressum-generator.html'],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      'kapitel 1': {
        title: '1. Datenschutz auf einen Blick',
        '1.1': {
          title: 'Allgemeine Hinweise',
          p: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
        },
        '1.2': {
          title: 'Datenerfassung auf dieser Website',
          subtitle1:
            'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
          p1: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.',
          subtitle2: 'Wie erfassen wir Ihre Daten?',
          'p2.1':
            'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
          'p2.2':
            'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
          subtitle3: 'Wofuer nutzen wir Ihre Daten?',
          p3: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewählt. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
          subtitle4: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
          'p4.1':
            'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
          'p4.2':
            'Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',
        },
      },
      'kapitel 2': {
        title: '2. Hosting',
        p: 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:',
        '2.2': 'All-Inkl',
        p2: 'Anbieter ist die ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf (nachfolgend All-Inkl). Details entnehmen Sie der Datenschutzerklärung von All-Inkl:',
        link: 'https://all-inkl.com/datenschutzinformationen/',
        p3: 'Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.',
      },
      'kapitel 3': {
        title: '3. Allgemeine Hinweise und Pflicht­informationen',
        '3.1': {
          title: 'Datenschutz',
          p1: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
          p2: 'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
          p3: 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
        },
        '3.2': {
          title: 'Hinweis zur verantwortlichen Stelle',
          p: 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
          name: 'Hanbit Chang',
          adresse: 'Alexianergraben 40<br />52062 Aachen',
          telefon: 'Telefon: +49 (0) 15774128843',
          mail: 'E-Mail: chanbit10@gmail.com',
          p2: 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',
        },
        '3.3': {
          title: 'Speicherdauer',
          p: 'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.',
        },
        '3.4': {
          title:
            'Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website',
          p: 'Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.',
        },
        '3.5': {
          title: 'Empfänger von personenbezogenen Daten',
          p: 'Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.',
        },
        '3.6': {
          title: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
          p: 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
        },
        '3.7': {
          title:
            'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)',
          p1: 'WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).',
          p2: 'WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).',
        },
        '3.8': {
          title: 'Beschwerde­recht bei der zuständigen Aufsichts­behörde',
          p: 'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
        },
        '3.9': {
          title: 'Recht auf Daten­übertrag­barkeit',
          p: 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
        },
        '3.10': {
          title: 'Auskunft, Berichtigung und Löschung',
          p: 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',
        },
        '3.11': {
          title: 'Recht auf Einschränkung der Verarbeitung',
          p1: 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:',
          p2: 'Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
          p3: 'Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.',
          p4: 'Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
          p5: 'Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
          p6: 'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',
        },
        kapitel4: {
          title: '4. Datenerfassung auf dieser Website',
          '4.1': {
            title: 'Kontaktformular',
            p1: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
            p2: 'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.',
            p3: 'Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.',
          },
          '4.2': {
            title: 'Anfrage per E-Mail, Telefon oder Telefax',
            p1: 'Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
            p2: 'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.',
            p3: 'Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.',
            quelle: 'Quelle:',
            link: 'https://www.e-recht24.de',
          },
        },
      },
    },
  },
};

export { texts };
