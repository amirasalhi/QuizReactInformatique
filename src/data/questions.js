const questions = [
  {
    question: "Quelle est la signification de CPU ?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Power Unit",
      "Control Processing Unit"
    ],
    answer: "Central Processing Unit"
  },
  {
    question: "Que signifie RAM ?",
    options: [
      "Random Access Memory",
      "Readily Available Memory",
      "Read Access Memory",
      "Rapid Access Memory"
    ],
    answer: "Random Access Memory"
  },
  {
    question: "Lequel des éléments suivants est un système d'exploitation ?",
    options: [
      "Linux",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    answer: "Linux"
  },
  {
    question: "Quelle commande Linux affiche la liste des fichiers ?",
    options: [
      "ls",
      "cd",
      "mkdir",
      "rm"
    ],
    answer: "ls"
  },
  {
    question: "Quelle est la fonction principale du routeur dans un réseau ?",
    options: [
      "Diriger le trafic entre réseaux",
      "Stocker des données",
      "Fournir une adresse IP",
      "Connecter des périphériques USB"
    ],
    answer: "Diriger le trafic entre réseaux"
  },
  {
    question: "Quelle couche du modèle OSI correspond au routage ?",
    options: [
      "Couche Réseau",
      "Couche Application",
      "Couche Transport",
      "Couche Liaison de données"
    ],
    answer: "Couche Réseau"
  },
  {
    question: "Quelle commande SQL permet de récupérer des données ?",
    options: [
      "SELECT",
      "INSERT",
      "DELETE",
      "UPDATE"
    ],
    answer: "SELECT"
  },
  {
    question: "Quel langage est principalement utilisé pour le développement web côté client ?",
    options: [
      "JavaScript",
      "Python",
      "Java",
      "C#"
    ],
    answer: "JavaScript"
  },
  {
    question: "Lequel des suivants est un protocole de transfert de fichiers ?",
    options: [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP"
    ],
    answer: "FTP"
  },
  {
    question: "Quelle est la principale différence entre HTTP et HTTPS ?",
    options: [
      "HTTPS utilise un chiffrement SSL/TLS",
      "HTTP est plus rapide",
      "HTTPS utilise un port différent",
      "HTTP est un protocole de messagerie"
    ],
    answer: "HTTPS utilise un chiffrement SSL/TLS"
  },
  {
    question: "Quelle commande Windows affiche la configuration réseau ?",
    options: [
      "ipconfig",
      "ifconfig",
      "netstat",
      "ping"
    ],
    answer: "ipconfig"
  },
  {
    question: "Que signifie DNS ?",
    options: [
      "Domain Name System",
      "Direct Network Service",
      "Data Network System",
      "Distributed Name Server"
    ],
    answer: "Domain Name System"
  },
  {
    question: "Lequel de ces langages est un langage de programmation orienté objet ?",
    options: [
      "Java",
      "HTML",
      "CSS",
      "SQL"
    ],
    answer: "Java"
  },
  {
    question: "Quelle est la fonction d’un commutateur (switch) dans un réseau ?",
    options: [
      "Connecter des appareils dans un même réseau local",
      "Gérer le routage entre réseaux",
      "Attribuer des adresses IP",
      "Sécuriser un réseau"
    ],
    answer: "Connecter des appareils dans un même réseau local"
  },
  {
    question: "Que signifie HTTP ?",
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Protocol",
      "Hyper Transfer Text Protocol",
      "Hyper Transmission Text Process"
    ],
    answer: "HyperText Transfer Protocol"
  },
  {
    question: "Quelle est la commande pour créer un nouveau dossier sous Linux ?",
    options: [
      "mkdir",
      "rmdir",
      "touch",
      "ls"
    ],
    answer: "mkdir"
  },
  {
    question: "Qu’est-ce qu’un IDE en informatique ?",
    options: [
      "Integrated Development Environment",
      "Internal Data Engine",
      "Internet Deployment Environment",
      "Initial Development Editor"
    ],
    answer: "Integrated Development Environment"
  },
  {
    question: "Quel composant matériel est responsable du stockage permanent ?",
    options: [
      "Disque dur (HDD/SSD)",
      "RAM",
      "CPU",
      "Carte graphique"
    ],
    answer: "Disque dur (HDD/SSD)"
  },
  {
    question: "Lequel de ces systèmes de gestion de base de données est relationnel ?",
    options: [
      "MySQL",
      "MongoDB",
      "Cassandra",
      "Redis"
    ],
    answer: "MySQL"
  },
  {
    question: "Que signifie SQL ?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Standard Query Language",
      "Sequential Query Language"
    ],
    answer: "Structured Query Language"
  },
  {
    question: "Quelle commande Linux affiche le contenu d’un fichier ?",
    options: [
      "cat",
      "ls",
      "rm",
      "touch"
    ],
    answer: "cat"
  },
  {
    question: "Quel protocole est utilisé pour envoyer des emails ?",
    options: [
      "SMTP",
      "FTP",
      "HTTP",
      "POP3"
    ],
    answer: "SMTP"
  },
  {
    question: "Que signifie DHCP ?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Domain Host Control Protocol",
      "Direct Host Communication Protocol",
      "Dynamic Hardware Control Protocol"
    ],
    answer: "Dynamic Host Configuration Protocol"
  },
  {
    question: "Quelle commande permet de vérifier la connectivité réseau ?",
    options: [
      "ping",
      "tracert",
      "netstat",
      "ipconfig"
    ],
    answer: "ping"
  },
  {
    question: "Dans une base de données relationnelle, que signifie une clé primaire ?",
    options: [
      "Un identifiant unique pour chaque enregistrement",
      "Une colonne contenant des données textuelles",
      "Une relation entre deux tables",
      "Un index pour accélérer les requêtes"
    ],
    answer: "Un identifiant unique pour chaque enregistrement"
  },
  {
    question: "Quel est le rôle principal du protocole TCP ?",
    options: [
      "Assurer la transmission fiable des données",
      "Gérer les adresses IP",
      "Envoyer des emails",
      "Afficher les pages web"
    ],
    answer: "Assurer la transmission fiable des données"
  },
  {
    question: "Quel type de mémoire est volatile ?",
    options: [
      "RAM",
      "Disque dur",
      "SSD",
      "ROM"
    ],
    answer: "RAM"
  },
  {
    question: "Quel est le port standard pour HTTP ?",
    options: [
      "80",
      "443",
      "21",
      "25"
    ],
    answer: "80"
  },
  {
    question: "Qu’est-ce qu’un virus informatique ?",
    options: [
      "Un programme malveillant qui peut se propager",
      "Un composant matériel",
      "Une commande Linux",
      "Un type de base de données"
    ],
    answer: "Un programme malveillant qui peut se propager"
  },
  {
    question: "Quel langage est utilisé pour styliser une page web ?",
    options: [
      "CSS",
      "HTML",
      "JavaScript",
      "Python"
    ],
    answer: "CSS"
  },
  {
    question: "Que signifie IDE ?",
    options: [
      "Integrated Development Environment",
      "Internet Development Engine",
      "Internal Debugging Environment",
      "Integrated Data Entity"
    ],
    answer: "Integrated Development Environment"
  },
  {
    question: "Quelle commande Linux sert à changer de répertoire ?",
    options: [
      "cd",
      "ls",
      "mv",
      "rm"
    ],
    answer: "cd"
  },
  {
    question: "Quelle est la fonction principale d’un firewall ?",
    options: [
      "Protéger le réseau contre les intrusions",
      "Transférer des fichiers",
      "Attribuer des adresses IP",
      "Gérer les utilisateurs"
    ],
    answer: "Protéger le réseau contre les intrusions"
  },
  {
    question: "Quelle extension de fichier est utilisée pour un script JavaScript ?",
    options: [
      ".js",
      ".css",
      ".html",
      ".exe"
    ],
    answer: ".js"
  },
  {
    question: "Que signifie HTTP ?",
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Protocol",
      "Hyper Transfer Text Process",
      "Hyper Transmission Text Protocol"
    ],
    answer: "HyperText Transfer Protocol"
  },
  {
    question: "Quelle commande permet de supprimer un fichier sous Linux ?",
    options: [
      "rm",
      "del",
      "erase",
      "delete"
    ],
    answer: "rm"
  },
  {
    question: "Quel est le rôle du BIOS dans un ordinateur ?",
    options: [
      "Initialiser le matériel au démarrage",
      "Gérer les fichiers",
      "Afficher le système d'exploitation",
      "Connecter à Internet"
    ],
    answer: "Initialiser le matériel au démarrage"
  },
  {
    question: "Lequel de ces protocoles est utilisé pour sécuriser les communications web ?",
    options: [
      "HTTPS",
      "HTTP",
      "FTP",
      "SMTP"
    ],
    answer: "HTTPS"
  },
  {
    question: "Que signifie URL ?",
    options: [
      "Uniform Resource Locator",
      "Universal Resource Link",
      "Unified Resource Locator",
      "Universal Reference Link"
    ],
    answer: "Uniform Resource Locator"
  },
  {
    question: "Quel langage est utilisé pour structurer le contenu d’une page web ?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    answer: "HTML"
  },
  {
    question: "Que signifie FTP ?",
    options: [
      "File Transfer Protocol",
      "Fast Transfer Protocol",
      "File Transport Protocol",
      "Fast Transport Protocol"
    ],
    answer: "File Transfer Protocol"
  },
  {
    question: "Quelle commande Windows permet de tracer le chemin réseau ?",
    options: [
      "tracert",
      "ping",
      "ipconfig",
      "netstat"
    ],
    answer: "tracert"
  },
  {
    question: "Quelle commande Linux affiche l’espace disque utilisé ?",
    options: [
      "df",
      "du",
      "ls",
      "free"
    ],
    answer: "df"
  },
  {
    question: "Que signifie GUI ?",
    options: [
      "Graphical User Interface",
      "General User Input",
      "Graphical Unified Interface",
      "General User Interface"
    ],
    answer: "Graphical User Interface"
  },
  {
    question: "Quel type de logiciel est un antivirus ?",
    options: [
      "Logiciel de sécurité",
      "Logiciel de bureautique",
      "Logiciel de développement",
      "Logiciel de graphisme"
    ],
    answer: "Logiciel de sécurité"
  },
  {
    question: "Quel est l’acronyme de la mémoire morte ?",
    options: [
      "ROM",
      "RAM",
      "CPU",
      "GPU"
    ],
    answer: "ROM"
  },
  {
    question: "Quelle est la fonction principale d’un serveur DNS ?",
    options: [
      "Traduire les noms de domaine en adresses IP",
      "Stocker les fichiers web",
      "Transférer des emails",
      "Gérer les connexions réseau"
    ],
    answer: "Traduire les noms de domaine en adresses IP"
  },
  {
    question: "Quel est l’acronyme de la mémoire vive ?",
    options: [
      "RAM",
      "ROM",
      "SSD",
      "HDD"
    ],
    answer: "RAM"
  },
  {
    question: "Quel est le rôle du protocole HTTPS ?",
    options: [
      "Assurer une connexion sécurisée",
      "Transférer des fichiers",
      "Gérer les emails",
      "Envoyer des messages instantanés"
    ],
    answer: "Assurer une connexion sécurisée"
  },
  {
    question: "Quelle commande Linux permet de modifier les permissions d’un fichier ?",
    options: [
      "chmod",
      "chown",
      "chgrp",
      "ls"
    ],
    answer: "chmod"
  },
  {
    question: "Que signifie API ?",
    options: [
      "Application Programming Interface",
      "Application Protocol Interface",
      "Advanced Programming Interface",
      "Application Process Integration"
    ],
    answer: "Application Programming Interface"
  },
  {
    question: "Quel protocole est utilisé pour récupérer les emails depuis un serveur ?",
    options: [
      "POP3",
      "SMTP",
      "FTP",
      "HTTP"
    ],
    answer: "POP3"
  },
  {
    question: "Quelle commande Windows permet d’afficher les connexions réseau actives ?",
    options: [
      "netstat",
      "ipconfig",
      "ping",
      "tracert"
    ],
    answer: "netstat"
  },
  {
    question: "Quel est le rôle d’un proxy ?",
    options: [
      "Intermédiaire entre un client et un serveur",
      "Serveur DNS",
      "Routeur",
      "Pare-feu"
    ],
    answer: "Intermédiaire entre un client et un serveur"
  },
  {
    question: "Quel type de câble est utilisé dans un réseau Ethernet ?",
    options: [
      "Câble RJ45",
      "Câble coaxial",
      "Câble HDMI",
      "Câble USB"
    ],
    answer: "Câble RJ45"
  },
  {
    question: "Quel protocole utilise le port 443 ?",
    options: [
      "HTTPS",
      "HTTP",
      "FTP",
      "SMTP"
    ],
    answer: "HTTPS"
  },
  {
    question: "Que signifie SSL ?",
    options: [
      "Secure Sockets Layer",
      "Secure System Link",
      "Simple Secure Link",
      "Secure Server Layer"
    ],
    answer: "Secure Sockets Layer"
  },
  {
    question: "Quelle commande Linux affiche la mémoire utilisée ?",
    options: [
      "free",
      "top",
      "df",
      "ls"
    ],
    answer: "free"
  },
  {
    question: "Quelle est la commande pour déplacer un fichier sous Linux ?",
    options: [
      "mv",
      "cp",
      "rm",
      "touch"
    ],
    answer: "mv"
  },
  {
    question: "Quel est le rôle du BIOS ?",
    options: [
      "Initialiser le matériel au démarrage",
      "Exécuter le système d’exploitation",
      "Gérer les fichiers",
      "Contrôler l’alimentation"
    ],
    answer: "Initialiser le matériel au démarrage"
  },
  {
    question: "Que signifie VPN ?",
    options: [
      "Virtual Private Network",
      "Virtual Public Network",
      "Verified Private Network",
      "Virtual Protected Network"
    ],
    answer: "Virtual Private Network"
  },
  {
    question: "Quel port est utilisé par le protocole FTP ?",
    options: [
      "21",
      "22",
      "80",
      "25"
    ],
    answer: "21"
  },
  {
    question: "Quelle est la commande pour créer un fichier vide sous Linux ?",
    options: [
      "touch",
      "mkdir",
      "rm",
      "cat"
    ],
    answer: "touch"
  },
  {
    question: "Que signifie HTML ?",
    options: [
      "HyperText Markup Language",
      "Hyper Transfer Markup Language",
      "HighText Markup Language",
      "HyperText Markdown Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Quel outil est utilisé pour contrôler les versions de code ?",
    options: [
      "Git",
      "Docker",
      "Jenkins",
      "Webpack"
    ],
    answer: "Git"
  },
  {
    question: "Quel protocole est utilisé pour transférer les pages web ?",
    options: [
      "HTTP",
      "FTP",
      "SMTP",
      "POP3"
    ],
    answer: "HTTP"
  },
  {
    question: "Quelle commande Linux affiche les processus en cours ?",
    options: [
      "top",
      "ls",
      "ps",
      "kill"
    ],
    answer: "top"
  },
  {
    question: "Que signifie CSS ?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Quel protocole est utilisé pour envoyer des emails ?",
    options: [
      "SMTP",
      "FTP",
      "HTTP",
      "POP3"
    ],
    answer: "SMTP"
  },
  {
    question: "Quel est l’acronyme pour l’unité de traitement graphique ?",
    options: [
      "GPU",
      "CPU",
      "RAM",
      "ROM"
    ],
    answer: "GPU"
  },
  {
    question: "Quelle commande Linux est utilisée pour changer les permissions ?",
    options: [
      "chmod",
      "chown",
      "chgrp",
      "ls"
    ],
    answer: "chmod"
  },
  {
    question: "Quel composant informatique est appelé 'mémoire morte' ?",
    options: [
      "ROM",
      "RAM",
      "SSD",
      "HDD"
    ],
    answer: "ROM"
  },
  {
    question: "Que signifie API ?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Integration",
      "Application Process Interface",
      "Automated Programming Interface"
    ],
    answer: "Application Programming Interface"
  },
  {
    question: "Quel protocole est utilisé pour sécuriser une connexion web ?",
    options: [
      "HTTPS",
      "HTTP",
      "FTP",
      "SMTP"
    ],
    answer: "HTTPS"
  },
  {
    question: "Quel port est utilisé par HTTPS ?",
    options: [
      "443",
      "80",
      "21",
      "25"
    ],
    answer: "443"
  },
  {
    question: "Que signifie DHCP ?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Dynamic Hardware Configuration Protocol",
      "Distributed Host Control Protocol",
      "Domain Host Control Protocol"
    ],
    answer: "Dynamic Host Configuration Protocol"
  },
  {
    question: "Quel est le rôle d’un serveur proxy ?",
    options: [
      "Intermédiaire entre client et serveur",
      "Serveur de fichiers",
      "Routeur réseau",
      "Pare-feu"
    ],
    answer: "Intermédiaire entre client et serveur"
  }
];
export default questions;