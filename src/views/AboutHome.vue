<template>
    <section class="w-full px-0 pb-[19rem] overflow-x-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="">
                <div class="space-y-4">
                    <vue-typewriter-effect v-if="!showStaticText" :strings="['Hola, Soy Sergio Cortes']" :loop="false"
                        :autoStart="true" :pauseFor="duration" :delay="100"
                        class="text-[3rem] font-[SF Compact Rounded] font-medium bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-50% to-[#ff2e62] to-95% bg-clip-text text-transparent" />
                    <!-- Opcional: texto estático que aparece después del efecto -->
                    <h1 v-else
                        class="text-[3rem] font-[SF Compact Rounded] font-medium bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-50% to-[#ff2e62] to-95% bg-clip-text text-transparent">
                        Hola, Soy Sergio Cortes
                    </h1>
                    <h2
                        class="font-[SF Compact Rounded] font-medium! text-white text-[16px] mx-auto mt-6! tracking-tight">
                        Soy un desarrollador de software enfocado en la optimización, mantenimiento y
                        creación de plataformas accesibles, fáciles de mantener, aplicando las mejores prácticas.
                    </h2>
                </div>
                <div class="flex mt-[2rem]! justify-between w-64 justify-self-end mr-9!">
                    <div class="b bg-[#FF2E63] w-[7rem]! h-[1.5rem]! rounded-xl"></div>
                    <div class="b bg-[#08D9D6] w-[3rem]! h-[1.5rem]! rounded-xl"></div>
                    <div class="b bg-[#EF233C] w-[5rem]! h-[1.5rem]! rounded-xl"></div>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <FluxAnimation></FluxAnimation>
            </div>
        </div>
    </section>
    <div class="w-full pb-[10rem]! px-0 grid grid-cols-6 gap-0">
        <!--Separador-->
        <div class="col-span-6 grid grid-cols-6">
            <div class="col-span-1">
                <h1
                    class="text-[2rem] font-[SF Compact Rounded] font-medium bg-gradient-to-r from-[#08D9D6] to-[#ff2e62]  bg-clip-text text-transparent">
                    Acerca de mí</h1>
            </div>
            <div class="col-span-5">
                <hr
                    class="h-[2px] bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-30% to-[#ff2e62] to-95% mt-[1.7rem]! w-full rounded-md border-none" />
            </div>
            <!--Separador-->
        </div>

        <div class="col-span-6 grid grid-cols-6 mb-[4.5rem]! pt-[5rem]">
            <div class="col-span-4 mt-8! text-justify tracking-tight grid grid-cols-6">
                <div class="col-span-6">
                    <p class="text-[16px] font-[SF Compact Rounded] font-medium! text-white ">
                        Desarrollador especializado principalmente en Java, con más de 2 años de experiencia en el
                        desarrollo de APIs y sistemas complejos.
                        Mi objetivo profesional es aplicar y seguir fortaleciendo mis habilidades en entornos que
                        valoren el
                        crecimiento constante y la mejora continua.
                        Me adapto con facilidad a nuevas tecnologías investigando, aplicandolas en nuevos proyectos,
                        siempre
                        guiado por buenas prácticas y respaldado por mis conocimientos previos.
                    </p>
                    <p class="text-[16px] font-[SF Compact Rounded] font-medium! text-white mt-8!">
                        Me adapto con facilidad a nuevas tecnologías investigando, aplicandolas en nuevos proyectos,
                        siempre
                        guiado por buenas prácticas y respaldado por mis conocimientos previos.
                    </p>
                    <h1 class="text-[1.4rem] font-[SF Compact Rounded] font-medium! text-white mt-8!">
                        Tecnologías más utilizadas:
                    </h1>
                    <div class="mt-4!">
                        <ul
                            class="grid grid-cols-2 gap-y-1 gap-x-3 text-[16px] text-white font-medium font-[SF Compact Rounded]">
                            <li v-for="(item, index) in tecnologias" :key="index" class="flex items-start ">
                                <img src="../assets/Triangle.svg" alt="•" class="w-3 h-3 mt-[.4rem]! mr-2!" />
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <div class="flex items-center justify-center mt-6!">
                    <div class="w-[18rem] h-[26rem] ">
                        <img src="../assets/Portrait.png" alt="Sergio Cortes"
                            class="w-full h-full rounded-lg drop-shadow-lg drop-shadow-[#5B5B5B]/50 skew-y-3" />
                        <!-- <Image src="../assets/Portrait.png" alt="Sergio Cortes" class="w-full h-full rounded-lg shadow-lg" /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full pb-[10rem] px-0 grid grid-cols-6 gap-0">
        <!--Separador-->
        <div class="col-span-6 grid grid-cols-6">
            <div class="col-span-1">
                <h1
                    class="text-[2rem] font-[SF Compact Rounded] font-medium bg-gradient-to-r from-[#08D9D6] to-[#ff2e62]  bg-clip-text text-transparent">
                    Experiencia</h1>
            </div>
            <div class="col-span-5">
                <hr
                    class="h-[2px] bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-30% to-[#ff2e62] to-95% mt-[1.7rem]! w-full rounded-md border-none" />
            </div>
        </div>

        <div class="col-span-6 grid grid-cols-6 mb-[3rem] pt-[4rem]">
            <div
                class="my-8! col-span-6 border-l-2 border-l-[#FF2E63] grid grid-cols-6  min-h-[28rem] transition-transform duration-200 ease-in-out">
                <div class="col-span-1">
                    <div v-for="(item, index) in experiencia" :key="index"
                        class="bg-[#FF2E63] rounded-md px-2 py-1 mb-4  ml-[2rem]! mt-[1rem]! flex items-center opacity-50 hover:opacity-100 hover:scale-105 hover:cursor-pointer transition-transform duration-200 ease-in-out"
                        :class="experienciaIndex == index ? 'opacity-100 scale-105' : ''"
                        @click="showDescription(index)">
                        <!-- Title and image in flex container -->
                        <div class="flex justify-between items-center w-full mb-[.5rem]!">
                            <div class="flex flex-col">
                                <h1 class="text-[1rem] font-[SF Compact Rounded] font-medium! text-white">{{ item.title
                                }}</h1>
                                <h3 class="text-[.5rem] font-[SF Compact Rounded] font-medium! text-[#AACCEE]">{{
                                    item.year }}</h3>
                            </div>
                            <img src="../assets/TriangleRed.svg" alt="•" class="w-3 h-3 flex-shrink-0 opacity-75" />
                        </div>
                    </div>
                </div>
                <div v-if="showDescFlag"
                    class="col-span-5 absolute left-[calc(16.666%-2rem)] ml-[6rem]! mr-[2rem]! text-[16px] font-[SF Compact Rounded] font-medium! text-white text-balance">
                    <h1 class="text-white font-bold! font-[SF Compact Rounded] text-[1.5rem]!">{{
                        aboutExp.position.concat(' - ').concat(aboutExp.title) }}</h1>
                    <p class="font-medium text-[.8rem] text-[#AACCEE] mt-4!">{{ aboutExp.year }}</p>
                    <p class="text-normal mt-6!">{{ aboutExp.description }}</p>
                    <h1 class="text-[1.1rem] font-[SF Compact Rounded] font-semibold! text-white mt-4!">
                        Tecnologías utilizadas:
                    </h1>
                    <ul
                        class="grid grid-cols-2 gap-y-1 gap-x-3 text-[16px] text-white font-medium font-[SF Compact Rounded] mt-8!">
                        <li v-for="(tech, index) in aboutExp.technologies" :key="index" class="flex items-start ">
                            <img src="../assets/Triangle.svg" alt="•" class="w-3 h-3 mt-[.4rem]! mr-2!" />
                            <span>{{ tech }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full pb-[10rem] px-0 grid grid-cols-6 gap-0">
        <!--Separador-->
        <div class="col-span-1">
            <h1
                class="text-[2rem] font-[SF Compact Rounded] font-medium bg-gradient-to-r from-[#08D9D6] to-[#ff2e62]  bg-clip-text text-transparent">
                Proyectos</h1>
        </div>
        <div class="col-span-5">
            <hr
                class="h-[2px] bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-30% to-[#ff2e62] to-95% mt-[1.7rem]! w-full rounded-md border-none" />
        </div>
    </div>

    <div class="w-full pb-[2rem] px-0 grid grid-cols-6 gap-0">
        <!--Separador-->
        <div class="col-span-6 grid grid-cols-6 ">
            <div class="col-span-1">
                <h1
                    class="text-[2rem] font-[SF Compact Rounded] font-medium bg-gradient-to-r from-[#08D9D6] to-[#ff2e62]  bg-clip-text text-transparent">
                    Contacto</h1>
            </div>
            <div class="col-span-5">
                <hr
                    class="h-[2px] bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-30% to-[#ff2e62] to-95% mt-[1.7rem]! w-full rounded-md border-none" />
            </div>
        </div>

        <!--Separador-->
        <div class="col-span-6 pt-[2rem] ">
            <p class="font-medium text-[1rem] text-[#AACCEE] sm:pl-[5rem] lg:pl-[7rem] mt-8! w-[50rem] text-balance">
                Conectemos y exploremos
                oportunidades de colaboración. Estoy disponible para proyectos freelance, oportunidades de trabajo y
                consultas técnicas.</p>
            <div class="grid grid-cols-2 justify-items-center">
                <div class="col-span-1">
                    <h1 class="font-semibold font-[SF Compact Rounded] text-white text-[1.5rem] mt-7!">Información de
                        Contacto</h1>
                    <div v-for="(item, index) in infoContacto" :key="index"
                        class="flex items-start mt-6! space-x-2 border-1 border-[#5B5B5B] rounded-md content-center! py-3 w-[27rem]">
                        <div :class="[
                            'flex justify-center items-center p-3 rounded-md mt-[.8rem]! mx-4!',
                            getStyleContactSocial('contact', index).backgroundClass
                        ]">
                            <i :class="[
                                item.icon + '  text-[1.5rem]',
                                getStyleContactSocial('contact', index).iconClass]
                                " />
                        </div>
                        <div>
                            <h1 class="text-[1.1rem] font-[SF Compact Rounded] font-semibold! text-white">{{ item.title
                                }}</h1>
                            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#AACCEE]">{{
                                item.content
                            }}</p>
                            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#08D9D6]">{{ item.msg
                                }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-1">
                    <h1 class="font-semibold font-[SF Compact Rounded] text-white text-[1.5rem] mt-7!">Redes Sociales
                    </h1>
                    <div v-for="(item, index) in redesSociales" :key="index"
                        class="flex items-start mt-6! space-x-2 border-1 border-[#5B5B5B] rounded-md content-center! py-3 w-[27rem]">
                        <div :class="[
                            'flex justify-center items-center p-3 rounded-md mt-[.8rem]! mx-4!',
                            getStyleContactSocial('social', index).backgroundClass
                        ]">
                            <i :class="[
                                item.icon + '  text-[1.5rem]',
                                getStyleContactSocial('social', index).iconClass]
                                " />
                        </div>
                        <div>
                            <h1 class="text-[1.1rem] font-[SF Compact Rounded] font-semibold! text-white">{{ item.title
                                }}</h1>
                            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#AACCEE]">{{
                                item.uri
                            }}</p>
                            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#08D9D6]">{{ item.msg
                                }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full px-0 grid grid-cols-6 gap-0">
        <div class="col-span-6 flex justify-center items-center pt-[1rem]">
            <div class="flex border border-[#08D9D6] rounded-md w-3/4 h-[10rem] mt-[5rem]! bg-[#08D9D6]/5">
                <div class="h-[3rem] w-[3rem] bg-[#08D9D6] m-[1rem]! rounded-md flex items-center justify-center">
                    <li class="pi pi-plus text-black text-[1.2rem]"></li>
                </div>
                <div class="flex flex-col justify-center flex-1 -mt-[2rem]!">
                    <h1 class="text-[1.5rem] font-[SF Compact Rounded] font-medium text-white mt-6!">¿Tienes un proyecto
                        en mente?</h1>
                    <p class="text-[1rem] font-[SF Compact Rounded] font-normal text-[#AACCEE] mt-1!  w-[93%]!">Estoy
                        disponible para nuevos proyectos y colaboraciones. Desde desarrollo web hasta consultoría
                        técnica, trabajemos juntos para hacer realidad tus ideas.</p>
                    <div class="flex flex-row">
                        <div
                            class="bg-[#08D9D6]/20 mt-4! mr-[.5rem]! w-[10rem] h[2rem] text-[#08D9D6] rounded-2xl flex justify-center items-center"
                            v-for="(item,index) in sellTip" :key="index">
                            {{ item }}</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FluxAnimation from '@/components/FluxAnimation.vue';

const showStaticText = ref(false);

const duration = 3800;


//Array de tecnologias más usadas
const tecnologias = ref([
    'Angular CLI',
    'VueJS',
    'Spring Boot',
    'AngularJS',
    'Java SQL Framework MyBatis',
    'Oracle SQL',
    'Java 8',
    'Java Framework Struts 2.5'])

const experiencia = ref([
    {
        title: 'CDS-UTEZ',
        year: 'Septiembre-2022 - Julio-2024',
        position: 'Desarrollador Fullstack',
        description: `Desarrollador fullstack especializado principalmente en Java desde la version 7 a 8,
            enfocado en el mantenimiento, optimización , migración y creación de modulos para el sistema de gestión escolar
            de la Universidad Tecnológica de Emiliano Zapata del Estado de Morelos, aplicando buenas prácticas y metodologías ágiles,
            además de llevar el proceso desde la obtención de requirimiento, generación de mockups, las vistas, la lógica de negocio y 
            la base de datos. Hasta la aprobación del cliente y la puesta en producción del sistema.
            Usando tecnologías como Struts 2.5, AngularJS, MySql, Ireport(Generación de reportes).
            `,
        technologies: ['Java 8', 'AngularJS', 'Struts 2.5', 'MySql', 'IReport']
    },
    {
        title: 'Rocket Code',
        year: 'Julio-2024 - Presente',
        position: 'Desarrollador Fullstack',
        description: `Desarrollador fullstack enfocado en en la creación, mejora y mantenimiento de sistemas principalmente 
                para el proveedor de seguros Quálitas, automatizando los procesos empleados por los agentes de seguros,
                siguiendo la metodología ágil Scrum, aplicando buenas prácticas posibles en el tiempo corto dado para el desarrollo.
                Usando tecnologías como Spring Boot, AngularCLI, VueJS, MyBatis, Oracle SQL`,
        technologies: ['Java 8', 'Spring Boot', 'Angular CLI', 'VueJS', 'MyBatis', 'Oracle SQL']
    }
])

const infoContacto = ref(
    [
        {
            title: 'Correo',
            content: 'sergiocortes518@gmail.com',
            msg: 'Respuesta en 24 horas',
            icon: 'pi pi-envelope'
        },
        {
            title: 'Teléfono',
            content: '+52 777 796 24 24',
            msg: 'Lun - Vie 9:00 - 18:00',
            icon: 'pi pi-phone'
        },
        {
            title: 'Ubicación',
            content: 'Cuernavaca, Morelos',
            msg: 'Disponible para trabajo remoto',
            icon: 'pi pi-map-marker'
        }
    ])

const redesSociales = ref(
    [
        {
            title: 'Linkedin',
            uri: 'www.linkedin.com/in/sergio-cortes-popoca-96758631b',
            msg: 'Perfil profesional y experiencia',
            icon: 'pi pi-linkedin'
        },
        {
            title: 'GitHub',
            uri: 'https://github.com/TheSerchCp',
            msg: 'Proyectos y código abierto',
            icon: 'pi pi-github'
        },
        {
            title: 'WhatsApp',
            uri: '+52 777 796 24 24',
            msg: 'Mensajes directos',
            icon: 'pi pi-whatsapp'
        }
    ])

const sellTip = ref([
    'Desarrollo Web', 'Rest APIS', 'Optimización', 'Consultoría'
])

onMounted(() => {
    // Aquí puedes realizar cualquier acción que necesites al montar el componente
    showDescFlag.value = true; // Inicializar el flag para mostrar la descripción
    experienciaIndex.value = 0; // Inicializar el índice de la experiencia
    // Inicializar la descripción
    aboutExp.value.title = experiencia.value[0].title;
    aboutExp.value.year = experiencia.value[0].year;
    aboutExp.value.position = experiencia.value[0].position;
    aboutExp.value.description = experiencia.value[0].description;
    aboutExp.value.technologies = experiencia.value[0].technologies;

    setTimeout(() => {
        showStaticText.value = true; // Mostrar el texto estático después del efecto de escritura
    }, duration);
});

const showDescFlag = ref(true);
const aboutExp = ref({
    title: '',
    year: '',
    position: '',
    description: '',
    technologies: [] as string[]
});
const experienciaIndex = ref(0);

//Funcion para controlar el mostrar el div contenedo de la descripción de la experiencia
const showDescription = (index: number) => {
    // Aquí puedes implementar la lógica para mostrar la descripción de la experiencia
    showDescFlag.value = true;
    experienciaIndex.value = index;
    aboutExp.value.title = experiencia.value[index].title;
    aboutExp.value.year = experiencia.value[index].year;
    aboutExp.value.position = experiencia.value[index].position;
    aboutExp.value.description = experiencia.value[index].description;
    aboutExp.value.technologies = experiencia.value[index].technologies;
};


/*Obtener el color de bg para los elementos de contacto y redes,
En los primeros 3 de contacto se usa el color index 0 : #08D9D6,
index 1: #FF2E63, index 2: #5B5B5B y color de icono index 0: negro,
index 1, 2 ; blanco */

//Se usa % para volver a repetir los colores de background

const getStyleContactSocial = (ston: string, index: number) => {
    const bgClasses = ['bg-cyan-400', 'bg-rose-500', 'bg-neutral-700'];
    const iconClasses = ['text-black', 'text-white', 'text-white'];
    const socialClass = 'text-blue-300';

    if (ston === 'contact') {
        return {
            backgroundClass: bgClasses[index % bgClasses.length],
            iconClass: iconClasses[index % iconClasses.length]
        };
    } else if (ston === 'social') {
        return {
            backgroundClass: 'border-1 border-[#5B5B5B]',
            iconClass: socialClass
        };
    }

    return { backgroundClass: '', iconClass: '' };
};

</script>