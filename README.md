&#10004;&#65039; / &#10060;
# BreitFront
Frontend app node.js


Technologies utilisées

Back-end : Springboot &#10060; ( backend en node.js)

Base de données : h2 en mémoire, ou Mysql &#10060; ( Une base distante mongodb avec un clusteur de 500 mo)

Front-end : ReactJs ou VueJs, ou à défaut HTML5/CSS3/JS(ES6) &#10004;&#65039; ( HTML5 Version PUG, CSS3 et JS natif)

Communication front/back : JSON &#10004;&#65039;

Navigateur Web : Chrome ou Firefox &#10004;&#65039; (tester avec les deux)

OS compatibles : Windows et Linux &#10004;&#65039;


Les fonctionnalités

Ordre de priorité : 

1 ==> Gestion d'un village (CRUD). &#10004;&#65039; ( Le CRUD est fait [add,delete,update,get])

2 ==> Liste des films. (90% probleme de liaison entre le Middleware et le CRUD) &#10004;&#65039; / &#10060;

3 ==> Sélectionner 5 films pour un événement. &#10060;

4 ==> Vote sur les 5 films proposés pour un événement. &#10060;

5 ==> Création/affichage d'un événement (passage dans un village) sans vote. &#10060;

&#128994; / &#128308;

Etat d'avancement du projet :

&#128994;&#128994;&#128994;&#128308;&#128308;&#128308;&#128308;&#128308;&#128308;&#128308; | 25 / 100%

__________________________________________________________________________________________________________________
Referenciel

Diagram de class ==> Diagramme de class non implémenté &#128308;

ERR Diagram ==>  Diagramme ERR non implémenté. &#128308;

schema et data du SGBDR ==> Data non lié mais totalement implémentable dans un sprint &#128994;

___________________________________________________________________________________________________________________

**Challenge : Failed**
___________________________________________________________________________________________________________________

***Man d'uttilisation***

1 - Lancer le project Scarlett sur votre IDE ou server de Devellopement.
2 - lancer  [ `npm start`  pour la version de production ]
            [ `npm run dev` pour la version de dev ]
            [ `npm run html2pug` pour convertir le code html en pug lisible par le DOM ]

3 - vous pouvez a présent travailler sur plusieurs page de developpement : 
/shop    ==> Vous permet d'avoir une vue globale. ()
/post    ==> Vous donne accès au CRUD ( Les routes 'post/getall' et 'post/INPROGRESS')
 

