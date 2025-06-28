<template>
    <section id="inicio" class="min-h-screen flex items-center pt-16 overflow-visible">
        <div class="max-w-7xl mx-auto! px-4! sm:px-6! lg:px-8! py-20! overflow-visible">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-visible">
                <!-- Added flex and items-center -->
                <!--Contenido principal-->
                <div class="space-y-8">
                    <div class="space-y-4">
                        <vue-typewriter-effect v-if="!showStaticText" :strings="['Hola, Soy Sergio Cortes']"
                            :loop="false" :autoStart="true" :pauseFor="duration" :delay="100"
                            class="text-5xl md:text-6xl font-[SF Compact Rounded] font-bold! bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-50% to-[#ff2e62] to-95% bg-clip-text text-transparent transition-transform duration-400 ease-in-out leading-tight" />
                        <!-- Opcional: texto estático que aparece después del efecto -->
                        <h1 v-else
                            class="text-5xl md:text-6xl py-2 font-[SF Compact Rounded] font-bold! bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-50% to-[#ff2e62] to-95% bg-clip-text text-transparent transition-transform duration-400 ease-in-out">
                            Hola, Soy Sergio Cortes
                        </h1>
                        <h2 class="font-[SF Compact Rounded] font-medium! text-white text-lg leading-relaxed max-w-lg">
                            Soy un desarrollador de software enfocado en la optimización, mantenimiento y
                            creación de plataformas accesibles, fáciles de mantener, aplicando las mejores prácticas.
                        </h2>
                        <div class="flex mt-[2rem]! gap-4">
                            <div
                                class="bg-[#FF2E63] h-[2.5rem]! rounded-md flex justify-center items-center group hover:cursor-pointer hover:bg-[#FF2E63]/80 transition-colors duration-300"
                                @click="scrollToSection('acerca-de')">
                                <div class="flex justify-center items-center gap-2 px-5 py-2!">
                                    <li class="pi pi-arrow-down animate-bounce text-white mx-2"></li>
                                    <p class="font-semibold! font-[SF Compact Rounded] text-white">Conoce más sobre mí
                                    </p>
                                </div>
                            </div>
                            <div
                                class="border-1 border-cyan-400 h-[2.5rem]! rounded-md flex justify-center items-center group hover:cursor-pointer hover:bg-cyan-400/20 transition-colors duration-300"
                                @click="scrollToSection('proyectos')">
                                <div class="flex justify-center items-center gap-2 px-5 py-2!">
                                    <li class="pi pi-external-link  text-cyan-400 mx-2"></li>
                                    <p class="font-semibold! font-[SF Compact Rounded] text-cyan-400">Ver mis proyectos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Contenedor de la animación con espacio adecuado -->
                <div class="hidden lg:block relative">
                    <!-- Agregamos altura mínima y overflow visible -->
                    <div class="w-full relative overflow-visible">
                        <FluxAnimation></FluxAnimation>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="acerca-de" class="w-full pt-20 lg:pt-24 pb-[4rem] lg:pb-[10rem]! p-0! grid grid-cols-1 lg:grid-cols-6 gap-12 bg-[#252A34]/50 px-4 sm:px-8! lg:px-16! justify-items-center">
        <!--Separador-->
        <div class="col-span-1 lg:col-span-6">
            <SectionTitle title="Acerca de mí" />
        </div>

        <div class="col-span-1 lg:col-span-6 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-[4.5rem]! pt-[2rem] lg:pt-[5rem]">
            <!-- Left column with text -->
            <div class="w-full lg:w-1/2 mt-8! text-justify tracking-tight">
                <div class="flex flex-col items-center lg:items-end">
                    <p class="text-[16px] font-[SF Compact Rounded] font-medium! text-white">
                        Desarrollador especializado principalmente en Java, con más de 2 años de experiencia en el
                        desarrollo de APIs y sistemas complejos.
                        Mi objetivo profesional es aplicar y seguir fortaleciendo mis habilidades en entornos que
                        valoren el crecimiento constante y la mejora continua.
                        Me adapto con facilidad a nuevas tecnologías investigando, aplicandolas en nuevos proyectos,
                        siempre guiado por buenas prácticas y respaldado por mis conocimientos previos.
                    </p>
                    <p class="text-[16px] font-[SF Compact Rounded] font-medium! text-white mt-8!">
                        Me adapto con facilidad a nuevas tecnologías investigando, aplicandolas en nuevos proyectos,
                        siempre guiado por buenas prácticas y respaldado por mis conocimientos previos.
                    </p>
                    <h1 class="text-[1.4rem] font-[SF Compact Rounded] font-bold! text-[#EF233C] mt-8!">
                        Tecnologías más utilizadas:
                    </h1>
                    <div class="mt-4! w-full">
                        <div class="flex flex-wrap gap-2 lg:gap-4">
                            <div v-for="(item, index) in tecnologias" :key="index"
                                class="flex items-center p-2 lg:p-3 bg-gray-900/19 rounded-lg hover:bg-gray-700/30 hover:scale-102 hover:cursor-default transition-colors duration-300 w-full sm:w-[calc(50%-0.25rem)] lg:w-[calc(50%-0.5rem)]">
                                <div class="w-3 h-3 mt-[.4rem]! mr-2! rounded-full bg-[#FF2E63]"></div>
                                <span class="text-sm lg:text-base text-white font-medium font-[SF Compact Rounded]">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right column with card -->
            <div class="w-full lg:w-1/2">
                <div class="flex justify-center lg:justify-end">
                    <Card class="w-full max-w-sm lg:max-w-md bg-black/20 backdrop-blur-lg!">
                        <template #content>
                            <div class="text-center space-y-4!">
                                <div class="w-48 h-48 mx-auto! bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                                    <img src="../assets/Portrait.png" alt="Alex Martínez - Desarrollador Full Stack"
                                        class="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg" />
                                </div>
                                <div class="space-y-2!">
                                    <h4 class="text-xl font-[SF Compact Rounded] font-semibold! text-white">Sergio Cortes Popoca</h4>
                                    <p class="font-[SF Compact Rounded] text-gray-200">Desarrollador Full Stack</p>
                                    <p class="font-[SF Compact Rounded] text-sm text-gray-400">Cuernavaca, Morelos</p>
                                </div>

                                <!-- Estadísticas -->
                                <div class="flex justify-between pt-4 border-t border-gray-500">
                                    <div class="text-center flex-1">
                                        <div class="font-[SF Compact Rounded] text-2xl font-bold! text-[#08D9D6]">2+</div>
                                        <div class="font-[SF Compact Rounded] text-xs text-gray-500">Años Exp.</div>
                                    </div>
                                    <div class="text-center flex-1">
                                        <div class="font-[SF Compact Rounded] text-2xl font-bold! text-[#FF2E63]">10+</div>
                                        <div class="font-[SF Compact Rounded] text-xs text-gray-500">Proyectos</div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
        </div>
    </div>

    <div id="experiencia" class="w-full pt-20 lg:pt-24 pb-[10rem] grid grid-cols-1 lg:grid-cols-6 gap-0 px-4 sm:px-8! lg:px-16!">
        <!--Separador-->
        <div class="col-span-1 lg:col-span-6">
            <SectionTitle title="Experiencia" />
        </div>

        <div class="col-span-1 lg:col-span-6 grid grid-cols-1 lg:grid-cols-6 mb-[3rem] pt-[2rem] lg:pt-[4rem]">
            <div v-for="(exp, index) in experiencia" :key="index"
                class="my-8! col-span-1 lg:col-span-6 grid grid-cols-1 lg:grid-cols-6 justify-items-center! transition-transform duration-400 ease-in-out">
                <div
                    class="col-span-1 lg:col-span-6 mx-2 lg:mx-4! font-[SF Compact Rounded] font-medium! text-white border-1 border-gray-400 rounded-lg p-3 lg:p-4 hover:border-[#FF2E63] hover:scale-102 transition-transform duration-400 ease-in-out">
                    <div class="flex flex-col">
                        <div class="flex flex-col lg:flex-row justify-start lg:justify-between items-start w-full">
                            <div class="flex flex-col">
                                <h1 class="text-[#FF2E63] font-bold! font-[SF Compact Rounded] text-2xl!">{{
                                    exp.position.concat(' - ').concat(exp.title) }}</h1>
                                <p class="text-lg text-[#AACCEE] mt-2">{{ exp.year }}</p>
                            </div>
                            <div class="bg-[#FF2E63] px-4 py-[0.1rem] rounded-2xl mt-4! lg:mt-2!">
                                <p class="text-xs! font-[SF Compact Rounded] font-semibold! text-white">
                                    {{ exp.time }}
                                </p>
                            </div>
                        </div>
                        <p class="text-normal mt-6!">{{ exp.description }}</p>
                        <h1 class="text-[1rem] font-[SF Compact Rounded] font-semibold! text-[#FF2E63] mt-4!">
                            Tecnologías utilizadas:
                        </h1>
                        <ul class="flex flex-wrap text-sm lg:text-[16px] mt-4 lg:mt-8!">
                            <li v-for="(tech, techIndex) in exp.technologies" :key="techIndex"
                                class="flex items-center justify-center border-1 border-[#FF2E63] rounded-2xl px-2 lg:px-4 py-[.1rem] mr-1 lg:mr-2! mb-2! hover:bg-[#FF2E63]/20 hover:cursor-default transition-colors duration-300">
                                <span class="text-[#FF2E63] font-semibold! font-[SF Compact Rounded] text-xs! ">{{ tech
                                    }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="proyectos" class="w-full pt-20 lg:pt-24 pb-[10rem] grid grid-cols-1 lg:grid-cols-6 gap-0 px-4 sm:px-8! lg:px-16!">
        <!--Separador-->
        <div class="col-span-1 lg:col-span-6">
            <SectionTitle title="Proyectos" />
        </div>

        <div class="col-span-1 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-2 lg:mx-4! mt-4 lg:mt-8!">
            <div class="border-1 border-gray-600 rounded-md flex flex-col p-3 lg:p-4 hover:scale-103 hover:border-[#08D9D6] transition-transform duration-400 ease-in-out"
                v-for="(project, index) in Proyectos" :key="index">
                <div class="flex flex-col">
                    <div class="flex flex-row items-end justify-end">
                        <div
                            class="border-1 border-[#08D9D6] bg-[#08D9D6]/20 rounded-full flex justify-center items-center py-1 px-3 lg:px-3.5 w-auto min-w-[5rem] lg:w-28">
                            <p class="text-xs! font-[SF Compact Rounded] font-bold! text-[#08D9D6]">
                                {{ project.status }}
                            </p>
                        </div>
                    </div>
                    <h1 class="text-lg lg:text-[1.5rem] font-[SF Compact Rounded] font-bold! text-white">{{ project.title }}</h1>
                </div>
                <p class="text-xs lg:text-sm font-[SF Compact Rounded] font-normal! text-gray-400 mt-2 lg:mt-4! ">{{ project.description }}
                </p>
                <div class="flex flex-row flex-wrap justify-start mt-2 lg:mt-4!">
                    <div class=" border-1 border-[#B5EAEA] px-2 lg:px-4! py-[0.1rem] mr-1 lg:mr-2! rounded-2xl mt-2! lg:mt-2! hover:bg-[#B5EAEA]/20 hover:cursor-default"
                        v-for="(tech, techIndex) in project.technologies" :key="techIndex">
                        <p class="text-[10px] lg:text-xs! font-[SF Compact Rounded] font-semibold! text-[#B5EAEA]">
                            {{ tech }}
                        </p>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap justify-start mt-2!">
                    <div class="h-[2rem] flex flex-row justify-around items-center rounded-lg px-4 py-0.5 mt-3! mr-2! hover:cursor-pointer"
                        :class="[getStyleContactProjectButton(linkIndex).backgroundClass,
                        getStyleContactProjectButton(linkIndex).borderClasses,
                        'group ' + getStyleContactProjectButton(linkIndex).hoverClass
                        ]" v-for="(link, linkIndex) in project.links" :key="linkIndex" @click="goToLink(link.url)">
                        <li :class="[getStyleContactProjectButton(linkIndex).iconClass,
                        link.icon,
                        getStyleContactProjectButton(linkIndex).groupHoverClass
                        ]"></li>
                        <p class="text-xs! font-[SF Compact Rounded] font-semibold! mx-1!" :class="[getStyleContactProjectButton(linkIndex).iconClass,
                        getStyleContactProjectButton(linkIndex).groupHoverClass
                        ]">{{ link.title }}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div id="contacto" class="w-full pt-20 lg:pt-24 pb-[4rem] lg:pb-[8rem] grid grid-cols-1 lg:grid-cols-6 gap-0 px-4 sm:px-8! lg:px-16!">
        <!--Separador-->
        <div class="col-span-1 lg:col-span-6">
            <SectionTitle title="Contacto" />
        </div>

        <!--Separador-->
        <div class="col-span-1 lg:col-span-6 pt-[1rem] lg:pt-[2rem]">
            <div class="grid grid-cols-1 lg:grid-cols-2 lg:justify-between gap-4 lg:gap-x-12! lg:gap-y-8 lg:gap-x-78">
                <div
                    class="col-span-1 border-1 border-gray-600 bg-gray-800/50 backdrop-blur-lg! rounded-md p-4 lg:p-6! lg:p-8!">
                    <h1 class="font-bold! font-[SF Compact Rounded] text-white text-2xl! ">Información de
                        Contacto</h1>
                    <div v-for="(item, index) in infoContacto" :key="index"
                        class="flex items-start border-1 border-gray-600 py-3 mt-6! space-x-2 rounded-md content-center! w-full hover:cursor-default hover:bg-[#08D9D6]/10 hover:border-[#08D9D6] transition-colors duration-300">
                        <div :class="[
                            'flex justify-center items-center p-4.5 rounded-md my-auto! mx-4!',
                            getStyleContactSocial('contact', index).backgroundClass
                        ]">
                            <i :class="[
                                item.icon + '  text-[1.8rem]',
                                getStyleContactSocial('contact', index).iconClass]
                                " />
                        </div>
                        <div>
                            <h1 class="text-[1.1rem] font-[SF Compact Rounded] font-semibold! text-white">{{ item.title
                            }}</h1>
                            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#AACCEE] text-balance!">
                                {{
                                    item.content
                                }}</p>
                            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#08D9D6] text-balance!">
                                {{
                                    item.msg
                                }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="col-span-1 border-1 border-gray-600  bg-gray-800/50 backdrop-blur-lg! rounded-md p-4 lg:p-6 lg:p-8 lg:flex lg:flex-col lg:items-start">
                    <h1 class="font-bold! font-[SF Compact Rounded] text-white text-2xl">Redes Sociales
                    </h1>
                    <div v-for="(item, index) in redesSociales" :key="index"
                        class="flex items-start mt-6! space-x-2 border-1 border-gray-600 rounded-md content-center! py-3 w-full hover:cursor-pointer hover:bg-[#08D9D6]/10 hover:border-[#08D9D6] transition-colors duration-300"
                        @click="item.title.toLocaleLowerCase() == 'whatsapp' ? '' : goToLink(item.uri)">
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
                            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#AACCEE] text-balance!">
                                {{
                                    item.uri
                                }}</p>
                            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#08D9D6] text-balance!">
                                {{
                                    item.msg
                                }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full grid grid-cols-1 lg:grid-cols-6 gap-0 pb-6 px-4 sm:px-8! lg:px-16!">
        <div class="col-span-1 lg:col-span-6 flex justify-center ">
            <div class="flex border border-[#5B5B5B] rounded-md p-5 mt-[5rem]! w-full">
                <div class="flex flex-col justify-center items-center flex-1 -mt-[2rem]!">
                    <h1 class="text-lg lg:text-[1.5rem] font-[SF Compact Rounded] font-bold! text-white mt-6!">¿Tienes un proyecto
                        en mente?</h1>
                    <p
                        class="text-sm lg:text-[1rem] font-[SF Compact Rounded] font-normal text-[#AACCEE] mt-1! w-full max-w-[800px] text-center">
                        Estoy
                        disponible para nuevos proyectos y colaboraciones. Desde desarrollo web hasta consultoría
                        técnica, trabajemos juntos para hacer realidad tus ideas.</p>
                    <div class="flex flex-row flex-wrap justify-center gap-2 mt-4!">
                        <div class="border-1 border-[#08D9D6] w-[8rem] lg:w-[10rem] h[2rem] text-[#08D9D6] hover:bg-[#08D9D6]/20 hover:cursor-default rounded-2xl flex justify-center items-center text-sm lg:text-base"
                            v-for="(item, index) in sellTip" :key="index">
                            {{ item }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full px-0 pb-15!">
        <div class="flex flex-col justify-center items-center">
            <hr class="h-[1px] bg-gray-600  mt-3! w-full  rounded-md border-none" />
            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#AACCEE] mt-4!">
                © 2024 Sergio Cortes Popoca. Todos los derechos reservados.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FluxAnimation from '@/components/FluxAnimation.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import Card from 'primevue/card';

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
        time: 'Tiempo Completo',
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
        time: 'Tiempo Completo',
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

const Proyectos = ref([
    {
        title: 'Gestoría vehicular',
        status: 'En desarrollo',
        description: `Sistema  de gestión vehicular para la venta de permisos de circulación,
        placas, licencias de conducir y otros trámites vehiculares.`,
        technologies: ['NextJS', 'TypeScript', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
        links: [
            {
                title: 'Demo',
                icon: 'pi pi-share-alt',
                url: 'https://gestoriavehicular.vercel.app'
            },
            {
                title: 'Código fuente',
                icon: 'pi pi-github',
                url: 'https://github.com/TheSerchCp/GestoriaVehicular-NextJS'
            }
        ]
    }
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
    aboutExp.value.time = experiencia.value[0].time;

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
    technologies: [] as string[],
    time: ''
});
const experienciaIndex = ref(0);


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

/**
 * Devuelve las clases de fondo e icono para un botón de proyecto de contacto según el índice
 * 
 * La función recorre arrays predefinidos de clases de fondo e icono usando el operador módulo
 * para asegurar que las clases se repitan después de llegar al final de los arrays
 * 
 * @param {number} index - El índice del botón para determinar qué clases aplicar
 * @returns {Object} Un objeto que contiene las cadenas backgroundClass e iconClass
 * 
 * @ejemplo
 * // Devuelve {backgroundClass: 'bg-cyan-400', iconClass: 'text-white'}
 * getStyleContactProjectButton(0);
 * 
 * // Devuelve {backgroundClass: 'bg-white', iconClass: 'text-cyan-400'} 
 * getStyleContactProjectButton(1);
 */

const getStyleContactProjectButton = (index: number) => {
    const bgClasses = ['bg-cyan-400', 'bg-gray-600', 'bg-transparent'];
    const borderClasses = ['border-1 border-cyan-400', 'border-1 border-cyan-400', 'border-1 border-transparent'];
    const iconClasses = ['text-white', 'text-cyan-400', 'text-white'];
    const hoverClasses = ['hover:bg-cyan-400/60', 'hover:bg-cyan-400 hover:text-white!', 'hover:bg-transparent'];
    const groupHoverClasses = ['group-hover:bg-transparent', 'group-hover:bg-cyan-400 group-hover:text-white!', 'group-hover:bg-transparent'];
    // Se usa % para volver a repetir los colores de background
    return {
        backgroundClass: bgClasses[index % bgClasses.length],
        iconClass: iconClasses[index % iconClasses.length],
        borderClasses: borderClasses[index % borderClasses.length],
        hoverClass: hoverClasses[index % hoverClasses.length],
        groupHoverClass: groupHoverClasses[index % groupHoverClasses.length]
    };
}

//Funcion para dirigir al link del codigo y demo de los proyectos
const goToLink = (url: string) => {
    window.open(url, '_blank');
};

//Funcion local para scroll a secciones
const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
};


</script>