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
    <div class="card conversations">
        <div class="card-title">Keskusteluja viime kuussa</div>
        <div class="card-content">
            <h2>32</h2>
        </div>
    </div>

    <div class="card conversation-redirected">
        <div class="card-title">Keskusteluja viimeistelty viime kuussa</div>
        <div class="card-content">
            <h2>11</h2>
        </div>
    </div>

    <div class="card conversation-length">
        <div class="card-title">Keskustelujen keskiverto pituus</div>
        <div class="card-content">
            <h2>8</h2>
        </div>
    </div>

    <div class="card conversation-rating">
        <div class="card-title">Keskustelujen tyytyväisyys viime kuussa</div>
        <div class="card-content">
            <h2>4.2</h2>
        </div>
    </div>

    <div class="card conversation-table">
        <div class="card-title">Keskusteluhistoria</div>
        <div class="card-content">
            <table class="conversation-history">
                <tr>
                    <th>Tyyppi</th>
                    <th>Aika</th>
                    <th>Pituus</th>
                    <th>Arvostelu</th>
                </tr>
                <tr>
                    <td>Digitarve</td>
                    <td>07.10.2021</td>
                    <td>8</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Digitarve</td>
                    <td>07.10.2021</td>
                    <td>16</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Koulutustarve</td>
                    <td>07.10.2021</td>
                    <td>2</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Digitarve</td>
                    <td>07.10.2021</td>
                    <td>8</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Koulutustarve</td>
                    <td>07.10.2021</td>
                    <td>12</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Koulutustarve</td>
                    <td>07.10.2021</td>
                    <td>8</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Koulutustarve</td>
                    <td>07.10.2021</td>
                    <td>3</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Digitarve</td>
                    <td>07.10.2021</td>
                    <td>12</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Digitarve</td>
                    <td>07.10.2021</td>
                    <td>2</td>
                    <td>1</td>
                </tr>
            </table>
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
    max-height: 90%;
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
    overflow-y: auto;
    height: 100%;
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

.conversations {
    grid-area: a;
}

.conversation-redirected {
    grid-area: b;
}

.conversation-length {
    grid-area: c;
}

.conversation-rating {
    grid-area: d;
}

.conversation-table {
    grid-area: e;
}

.conversation-history {
    width: 100%;
    overflow-y: auto;
}

.conversation-history > tbody > tr {
    height: 2.5rem;
}

.conversation-history > tbody > tr:hover {
    background-color: #eee;
    cursor: pointer;
}

.conversation-history > tbody > tr > td {
    border-bottom: 1px solid #eee;
}

h2 {
    line-height: 5rem;
}

.grid {
    display: grid;
    grid-template-areas:
        "a b c d"
        "e e e e";
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 5fr;
    min-height: 100%;
    width: 100%;
    gap: 0.5rem;
    padding: 0.5rem;
}
</style>
