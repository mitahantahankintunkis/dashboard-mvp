<script setup>
const dudes = [
    {
        name: 'Matti Meikäläinen',
        id: 0,
    },
    {
        name: 'Maija Meikäläinen',
        id: 1,
    }
]
</script>


<template>
<div class="grid">
    <div class="card survey">
        <div class="card-title">Osaamiskartoitus</div>
        <div class="card-content">
            <a href="javascript:void(0)">osaamiskartoitus.fi/abcdefg</a>
        </div>
    </div>

    <div class="card users">
        <div class="card-title">Ryhmän jäsenet</div>
        <div class="card-content">
            <ul>
                <li v-for="dude in dudes" :key="dude.id">
                    <router-link to="/yleiskatsaus">
                        {{ dude.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

    <div class="card graph-completed">
        <div class="card-title">Täytetyt osaamiskartoitukset</div>
        <div class="card-content img img-completed">
        </div>
    </div>

    <div class="card graph-learning">
        <div class="card-title">Jatkokoulutuksessa olevat</div>
        <div class="card-content img img-learning">
        </div>
    </div>

    <div class="card graph-pdc">
        <div class="card-title">PDC:n seuranta</div>
        <div class="card-content img img-pdc">
        </div>
    </div>
</div>
</template>


<style scoped>
.card {
    background: white;
    border: none;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 4px #eeeeee;
}

.card-title {
    color: gray;
    text-align: start;
    margin-bottom: 0.5rem;
}

.card-content {
    height: 100%;
    padding-bottom: 0.5rem;
}

.img {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.img-completed,
.img-learning {
    background-image: url("../assets/pie.png");
}

.img-pdc {
    background-image: url("../assets/pdc.png");
}

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
    overflow: scroll;
}

li {
    height: 2rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid gray;
    width: 100%;
}

li > a:hover {
    color: gray;
}

li > a {
    line-height: 2.2rem;
    color: black;
    text-decoration: none;
    width: 100%;
}

.survey {
    grid-area: a;
}

.users {
    grid-area: d;
}

.graph-completed {
    grid-area: b;
}

.graph-learning {
    grid-area: c;
}

.graph-pdc {
    grid-area: e;
}

.grid {
    display: grid;
    grid-template-areas:
        "a b c"
        "d e e";
    grid-template-columns: 2fr 4fr 4fr;
    min-height: 100%;
    width: 100%;
    gap: 0.5rem;
    padding: 0.5rem;
}
</style>
