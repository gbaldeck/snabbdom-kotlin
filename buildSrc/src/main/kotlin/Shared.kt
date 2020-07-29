import org.gradle.api.Project
import org.gradle.api.publish.PublishingExtension
import org.gradle.api.publish.maven.MavenPom
import org.gradle.api.publish.maven.MavenPublication
import org.gradle.kotlin.dsl.getByType
import org.gradle.kotlin.dsl.withType

fun MavenPom.defaultPom() {
    name.set("snabbdom-kotlin")
    description.set("Kotlin definition files for the Snabbdom virtual DOM library.")
    url.set("https://github.com/gbaldeck/snabbdom-kotlin")
    licenses {
        license {
            name.set("MIT")
            url.set("https://opensource.org/licenses/MIT")
        }
    }
    developers {
        developer {
            id.set("gbaldeck")
            name.set("Graham Baldeck")
        }
    }
    scm {
        url.set("https://github.com/gbaldeck/snabbdom-kotlin.git")
        connection.set("scm:git:git://github.com/gbaldeck/snabbdom-kotlin.git")
        developerConnection.set("scm:git:git://github.com/gbaldeck/snabbdom-kotlin.git")
    }
}

fun Project.setupPublication() {
    plugins.apply("maven-publish")

    extensions.getByType<PublishingExtension>().run {
        publications.withType<MavenPublication>().all {
            pom {
                defaultPom()
            }
        }

        repositories {
            maven {
                url = uri("https://api.bintray.com/maven/gbaldeck/kotlin/${project.name}/;publish=0;override=1")
                credentials {
                    username = findProperty("buser")?.toString()
                    password = findProperty("bkey")?.toString()
                }
            }
        }
    }
}
