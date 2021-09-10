<script setup>
// 3. Käyttäjä valitsee "Listaa yrityksen avoimet työpaikat"
// 4. Käyttäjä valitsee listalta työpaikan
// 5. Käyttäjä valitsee "Listaa työpaikkaan sopivia hakijoita"
const jobs = [
    {
        title: 'Markkinoinnin asiantuntija',
        id: 0,
    },
    {
        title: 'Python ohjelmoija',
        id: 1,
    },
    {
        title: 'SCRUM master',
        id: 2,
    }
]
</script>


<template>
<div class="wrapper">
    <ul>
        <li v-for="job in jobs" :key="job.id">
            <router-link class="joblink" :to="'/tyopaikat/' + job.id">
                {{ job.title }}
            </router-link>
        </li>
    </ul>
</div>
</template>


<style scoped>
h1 {
    font-size: 3rem;
    width: 100%;
    height: 100%;
    line-height: 30vh;
}

p {
    font-size: 2rem;
    width: 100%;
    height: 100%;
}

ul {
    list-style: none;
    margin: 0 auto;
}

li {
    height: 2rem;
    background-color: #eeeeee;
    margin-bottom: 0.5rem;
    width: 40rem;
}

li > a {
    line-height: 2.2rem;
    color: black;
    text-decoration: none;
}

.wrapper {
    display: flex;
    flex-direction: column;
    min-height: calc(100% - 4.5rem);
    background-color: white;
    margin: 1rem;
    border-radius: 4px;
    padding: 2rem;
}
</style>
