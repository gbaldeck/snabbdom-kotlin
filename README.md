# snabbdom-kotlin

This project is a set of Kotlin definition files for the Snabbdom virtual DOM library. Snabbdom is used in several frontend frameworks, the most famous being Vue.

https://github.com/snabbdom/snabbdom

### Project Details

The definition files here are based on snabbdom v0.7.4.

This project is built with Gradle 6.6.

The typescript definition files in the `/snabbdom.d.ts` folder are copied from the snabbdom v0.6.9 release on npm and then run through the `ts2kt tool` (https://github.com/Kotlin/ts2kt).
The output from the `ts2kt tool` is in the `/snabbdom.d.ts/generated` folder.

The files under the `src` folder are the same output files but modified so that snabbdom is completely ready to use in Kotlin.

### How to use

The releases of this project are available from bintray.
To use it in your project add the following code in your build.gradle.kts file.

    repositories {
        ...
        maven { url = uri("https://dl.bintray.com/gbaldeck/kotlin") }
    }

    dependencies {
        ...
        api("com.github.snabbdom:snabbdom-kotlin:$snabbdomKotlinVersion")
    }
    
Don't forget to include Snabbdom in your project.

    dependencies {
        ...
        implementation(npm("snabbdom", "^0.7.4"))
    }

To see this library being used in a project check out KVision (https://github.com/rjaros/kvision).
