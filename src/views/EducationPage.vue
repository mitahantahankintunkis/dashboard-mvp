<script setup>

const groups = [
    { id: 0, name: "Metropolia, ryhmä 1" },
    { id: 1, name: "Metropolia, ryhmä 2" },
    { id: 2, name: "Metropolia, ryhmä 3" },
    { id: 3, name: "Koulutusryhmä A" },
    { id: 4, name: "Esim Oy: ryhmä A" },
    { id: 5, name: "Esim Oy: ryhmä B" },
    { id: 6, name: "Testi Oy: ryhmä 1" },
    { id: 7, name: "Testi Oy: ryhmä 2" },
];

function search(a, b) {
    console.log(a, b);
}
</script>


<template>
<div class="search-wrapper">
    <input id="group-search" type="text" placeholder="Etsi koulutettavia ryhmiä" @change="search">
</div>

<div class="wrapper">
    <div class="groups">
        <router-link v-for="group in groups" :key="group.id" class="grouplink" :to="'/koulutukset/' + group.id">{{ group.name }}</router-link>
        <button id="create-new">Luo uusi</button>
    </div>
</div>
</template>


<style scoped>
.grouplink {
    text-decoration: none;
    height: 2rem;
    width: 100%;
    line-height: 2.2rem;
    color: black;
    border: none;
    border-bottom: 1px solid gray;
    text-align: start;
    margin-bottom: 1rem;
}

.grouplink:hover {
    color: gray;
}

.groups {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

#group-search {
    height: 100%;
    width: 100%;
    border: none;
    border-bottom: 1px solid gray;
    background: none;
}

#create-new {
    background-color: #39afc8;
    color: white;
    height: 2rem;
    border: none;
    border-radius: 2px;
    cursor: pointer;
}

#create-new:hover {
    filter: brightness(1.1);
}

.searchwrapper > p {
    line-height: 2.5rem;
    margin-right: 1rem;
}

select {
    background-color: #ffffff00;
    border: none;
    border-bottom: 1px solid #cccccc;
    height: 100%;
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

.search-wrapper {
    width: 100%;
    height: 3rem;
    padding: 1rem 1rem 0rem 1rem;
}
</style>