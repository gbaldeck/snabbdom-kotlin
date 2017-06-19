# snabbdom-kotlin
This project is a set of Kotlin definition files for the Snabbdom virtual DOM library. Snabbdom is used in several frontend frameworks, the most famous being Vue.

https://github.com/snabbdom/snabbdom

### Project Details

The definition files here are based on snabbdom v0.6.9.

This project is built with Gradle 4.0.

The typescript definition files in the `/snabbdom.d.ts` folder are copied from the snabbdom v0.6.9 release on npm and then run through the `ts2kt tool` (https://github.com/Kotlin/ts2kt).
The output from the `ts2kt tool` is in the `/snabbdom.d.ts/generated` folder.

The files under the `src` folder are these same output files but modified so that snabbdom is completely ready to use in Kotlin.

### How to use

The releases of this project are available from bintray. 
To include it in a project put the below in your build.gradle file.

    
    repositories {
        ...
        maven { url = 'https://dl.bintray.com/gbaldeck/kotlin' }
    }
    
    dependencies {
        ...
        compile "com.github.snabbdom:snabbdom-kotlin:0.1.0"
    }


To see this library being used in a project check out Propa (https://github.com/PropaFramework/Propa).

Propa uses the Kotlin Gradle plugin as well as the Kotlin-Frontend Gradle plugin. To see how it works look at the Propa `build.gradle` file (https://github.com/PropaFramework/Propa/blob/master/build.gradle).

Propa is a frontend framework for the web written in Kotlin for Kotlin and is currently under development. It's meant to be to Kotlin what Vue, React, and Angular are to Javascript/Typescript.

If you're interested in contributing to Propa feel free to send me an e-mail at gbaldeck@gmail.com.

