<template>
    <div class="p-4">
        <!-- Loading -->
        <div v-if="loading" class="text-center text-white">
            Cargando...
        </div>
        <!-- Error -->
        <div v-if="error" class="text-center text-red-500">
            Error al cargar los personajes.
        </div>
        <!-- Show characters -->
        <section class="grid grid-cols-4">
            <article v-for="character in characters" :key="character.id"
                     class="bg-gray-950 rounded-lg m-4">
                <!-- Character image -->
                <img :src="character.image" :alt="`${character.name} image`">
                <!-- Character info -->
                <div>
                    <h3>{{ character.name }}</h3>
                    <p>{{ character.status }}</p>
                </div>
            </article>
        </section>

    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    const charactersAPI = "https://rickandmortyapi.com/api/character";

    const characters = ref( [] );
    const loading = ref( true );
    const error = ref( false );

    const actualPage = 1;
    const maxPage = 42;
    const next = actualPage === maxPage ? maxPage : actualPage + 1;
    const prev = actualPage === 1 ? 1 : actualPage - 1;

    /*
        Function that get all characters
    */
    const getCharacters = async () => {
        try
        {
            const response = await fetch( charactersAPI );
            const data = await response.json();
            characters.value = data.results;
            loading.value = false;
        }
        catch ( err )
        {
            console.error( "Error fetching data: " + err );
            error.value = true;
            loading.value = false;
        }
    };

    /*
        Function that get all characters from the specified page
    */
    const getCharacterFromPage = async ( page ) => {
        try
        {
            const response = await fetch( charactersAPI + `/?page=${page}` );
            const data = await response.json();
            characters.value = data.results;
            loading.value = false;
        }
        catch( err )
        {
            console.error( "Error fetching data: " + err );
            error.value = true;
            loading.value = false;
        }
    };

    onMounted( () => {
        getCharacters();
    } );
</script>