<template>
    <div class="w-full overflow-x-hidden mt-[2rem]! py-10 px-6">
        <div class="flex flex-col lg:flex-row gap-2">
            <div class="flex-1 flex items-center"> <!-- Added flex and items-center -->
                <div class="flex flex-col">
                    <vue-typewriter-effect v-if="!showStaticText" :strings="['Hola, Soy Sergio Cortes']" :loop="false"
                        :autoStart="true" :pauseFor="duration" :delay="100"
                        class="text-[3rem] font-[SF Compact Rounded] font-bold! bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-50% to-[#ff2e62] to-95% bg-clip-text text-transparent" />
                    <!-- Opcional: texto estático que aparece después del efecto -->
                    <h1 v-else
                        class="text-[3rem] font-[SF Compact Rounded] font-bold! bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-50% to-[#ff2e62] to-95% bg-clip-text text-transparent transition-transform duration-400 ease-in-out">
                        Hola, Soy Sergio Cortes
                    </h1>
                    <h2 class="font-[SF Compact Rounded] font-medium! text-white text-[16px] mt-6! tracking-tight">
                        Soy un desarrollador de software enfocado en la optimización, mantenimiento y
                        creación de plataformas accesibles, fáciles de mantener, aplicando las mejores prácticas.
                    </h2>
                    <div class="flex mt-[2rem]! w-64 justify-between mr-9!">
                        <div class="bg-[#FF2E63] w-[7rem]! h-[1.8rem]! rounded-lg"></div>
                        <div class="bg-[#08D9D6] w-[3rem]! h-[1.8rem]! rounded-lg"></div>
                        <div class="bg-[#EF233C] w-[5rem]! h-[1.8rem]! rounded-lg"></div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center flex-1">
                <FluxAnimation></FluxAnimation>
            </div>
        </div>
    </div>
    <div class="w-full pb-[10rem]! p-0! grid grid-cols-6 gap-0 bg-[#252A34]/50 px-6! justify-items-center">
        <!--Separador-->
        <SectionTitle title="Acerca de mí" />

        <div class="col-span-6 grid grid-cols-6 mb-[4.5rem]! pt-[5rem]">
            <div
                class="col-span-6 lg:col-span-3 xl:col-span-3 2xl:col-span-3 mt-8!  text-justify tracking-tight grid grid-cols-6">
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
                    <h1 class="text-[1.4rem] font-[SF Compact Rounded] font-bold! text-[#EF233C] mt-8!">
                        Tecnologías más utilizadas:
                    </h1>
                    <div class="mt-4!">
                        <ul
                            class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-[16px] text-white font-medium font-[SF Compact Rounded]">
                            <li v-for="(item, index) in tecnologias" :key="index"
                                class="flex items-center p-3 bg-gray-900/19 rounded-lg hover:bg-gray-700/30 transition-colors duration-300">
                                <div class="w-3 h-3 mt-[.4rem]! mr-2! rounded-full bg-[#FF2E63]"></div>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-span-6 lg:col-span-3">
                <div class="flex items-center justify-center mt-6!">
                    <div class="w-[19rem] h-[26rem] ">
                        <img src="../assets/Portrait.png" alt="Sergio Cortes"
                            class="w-full h-full rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" />
                        <!-- <Image src="../assets/Portrait.png" alt="Sergio Cortes" class="w-full h-full rounded-lg shadow-lg" /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full pb-[10rem] px-0 grid grid-cols-6 gap-0">
        <!--Separador-->
        <SectionTitle title="Experiencia" />

        <div class="col-span-6 grid grid-cols-6 mb-[3rem] pt-[4rem]">
            <div v-for="(exp, index) in experiencia" :key="index"
                class="my-8! col-span-6 grid grid-cols-6 justify-items-center!  transition-transform duration-400 ease-in-out">
                <div
                    class="col-span-6 mx-auto w-5/6 font-[SF Compact Rounded] font-medium! text-white border-1 border-gray-400 rounded-lg p-4 hover:border-[#FF2E63] hover:scale-102 transition-transform duration-400 ease-in-out">
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
                        <ul class="flex flex-wrap text-[16px] mt-8!">
                            <li v-for="(tech, techIndex) in exp.technologies" :key="techIndex"
                                class="flex items-center justify-center border-1 border-[#FF2E63] rounded-2xl px-4 py-[.1rem] mr-2! mb-2! hover:bg-[#FF2E63]/20">
                                <span class="text-[#FF2E63] font-semibold! font-[SF Compact Rounded] text-xs! ">{{ tech
                                    }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full pb-[10rem] px-0 grid grid-cols-6 gap-0">
        <!--Separador-->
        <SectionTitle title="Proyectos" />

        <div class="col-span-6 flex justify-between ml-4! mr-2! mt-8!">
            <div class="border-1 border-gray-600 h-[18rem] w-[30rem] rounded-md flex flex-col p-4">
                <div class="flex flex-col">
                    <div class="flex flex-row items-end justify-end">
                      <div class="border-1 border-[#08D9D6] bg-[#08D9D6]/20 rounded-full flex justify-end items-center py-0.5 px-3.5 w-28">
                        <p class="text-xs! font-[SF Compact Rounded] font-bold! text-[#08D9D6]">
                            En desarrollo
                        </p>
                    </div>
                    </div>
                    <h1 class="text-[1.5rem] font-[SF Compact Rounded] font-bold! text-white">Gestoría
                        vehicular</h1>
                </div>
                <p class="text-sm font-[SF Compact Rounded] font-normal! text-gray-400 mt-4! ">
                    Sistema de gestión vehicular para la venta de permisos de circulación, placas, licencias de conducir
                    y otros trámites vehiculares.
                </p>
                <div class="flex flex-row justify-start mt-4!">
                         <div class="bg-[#B5EAEA]/20 border-1 border-[#B5EAEA] px-4 py-[0.1rem] rounded-2xl mt-4! lg:mt-2!">
                                <p class="text-xs! font-[SF Compact Rounded] font-semibold! text-[#B5EAEA]">
                                   hola
                                </p>
                            </div>
                </div>
                <div class="flex flex-row justify-start mt-2!">
                    <div class="h-[2rem] bg-[#08D9D6] flex flex-row justify-around items-center rounded-lg px-4 py-0.5 mt-3!">
                        <li class="pi pi-github text-white"></li>
                        <p class="text-xs! font-[SF Compact Rounded] font-semibold! text-white mx-1! ">Demo</p>
                    </div>

                </div>   
            </div>
        </div>
    </div>

    <div class="w-full  px-0 grid grid-cols-6 gap-0">
        <!--Separador-->
        <SectionTitle title="Contacto" />

        <!--Separador-->
        <div class="col-span-6 pt-[2rem] ">
            <div class="grid grid-cols-2 justify-items-center">
                <div class="col-span-1">
                    <h1 class="font-bold! font-[SF Compact Rounded] text-white text-[1.5rem] mt-7!">Información de
                        Contacto</h1>
                    <div v-for="(item, index) in infoContacto" :key="index"
                        class="flex items-start mt-6! space-x-2 rounded-md content-center! py-1 w-[27rem]">
                        <div :class="[
                            'flex justify-center items-center p-5 rounded-md mt-[.8rem]! mx-4!',
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
                            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#AACCEE]">{{
                                item.content
                            }}</p>
                            <p class="text-[.8rem] font-[SF Compact Rounded] font-medium! text-[#08D9D6]">{{ item.msg
                                }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-1">
                    <h1 class="font-bold! font-[SF Compact Rounded] text-white text-[1.5rem] mt-7!">Redes Sociales
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
    <div class="w-full px-0 grid grid-cols-6 gap-0 pb-6">
        <div class="col-span-6 flex justify-center items-center pt-[1rem]">
            <div class="flex border border-[#5B5B5B] rounded-md content-center! w-5/6 h-[10rem] mt-[5rem]!">
                <div class="flex flex-col justify-center items-center flex-1 -mt-[2rem]!">
                    <h1 class="text-[1.5rem] font-[SF Compact Rounded] font-bold! text-white mt-6!">¿Tienes un proyecto
                        en mente?</h1>
                    <p
                        class="text-[1rem] font-[SF Compact Rounded] font-normal text-[#AACCEE] mt-1!  w-[93%]! text-center">
                        Estoy
                        disponible para nuevos proyectos y colaboraciones. Desde desarrollo web hasta consultoría
                        técnica, trabajemos juntos para hacer realidad tus ideas.</p>
                    <div class="flex flex-row">
                        <div class="border-1 border-[#08D9D6] mt-4! mr-[.5rem]! w-[10rem] h[2rem] text-[#08D9D6] rounded-2xl flex justify-center items-center"
                            v-for="(item, index) in sellTip" :key="index">
                            {{ item }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full px-0 pb-8!">
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
        technologies: ['Java 8', 'Spring Boot', 'Angular CLI', 'VueJS', 'MyBatis', 'Oracle SQL'],
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
    aboutExp.value.time = experiencia.value[index].time;
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