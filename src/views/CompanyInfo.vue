<script setup>
import { toRefs } from "@vue/reactivity"

const props = defineProps({
    rawData: Object,
})

//const { rawData } = toRefs(props)
//console.log(rawData)
//
//const cleanData = [
//    { label: 'Osoite', data: `${rawData['Osoite']}, ${rawData['Postitoimipaikka']}` },
//    { label: 'Y-tunnus', data: rawData['Y-tunnus'] },
//    { label: 'Verkkosivut', data: rawData['WWW-osoite'] },
//    { label: 'Puhelinnumero', data: rawData['Puhelin'] },
//    { label: 'Henkilöstömäärä', data: rawData['Henkilöstömäärä (viimeisin)'] },
//    { label: 'Liikevaihto', data: rawData['Liikevaihto (viimeisin) EUR'] },
//]
//
//const title = rawData['Yritys']
//const subtitle = rawData['Toimiala']

</script>


<template>
<p class="title">{{ rawData['Yritys'] }}</p>
<p class="subtitle">{{ rawData['Toimiala'] }}</p>

<table>
    <tr>
        <th>Osoite</th>
        <td>{{ `${rawData['Osoite']}, ${rawData['Postitoimipaikka']}` }}</td>
    </tr>
    <tr>
        <th>Y-tunnus</th>
        <td>{{ rawData['Y-tunnus'] }}</td>
    </tr>
    <tr>
        <th>Verkkosivut</th>
        <td>{{ rawData['WWW-osoite'] }}</td>
    </tr>
    <tr>
        <th>Puhelinnumero</th>
        <td>{{ rawData['Puhelin'] }}</td>
    </tr>
    <tr>
        <th>Henkilöstömäärä</th>
        <td>{{ rawData['Henkilöstömäärä (viimeisin)'] }}</td>
    </tr>
    <tr>
        <th>Liikevaihto</th>
        <td>{{ rawData['Liikevaihto (viimeisin) EUR'] }}</td>
    </tr>
</table>
</template>


<style scoped>
table {
    width: 100%;
    margin-top: 2rem;
}

th, td {
    text-align: start;
    font-size: 1rem;
}

th {
    width: 30%;
}

td {
    width: 70%;
}

.title {
    font-size: 1.4rem; text-align: start;
}

.subtitle {
    font-size: 1.2rem;
    color: gray;
    text-align: start;
}
</style>