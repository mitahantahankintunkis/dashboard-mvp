<script setup>
import CompanyInfo from "./CompanyInfo.vue"
import { rawData } from "../assets/companyData.js"
import { ref } from "vue"

//console.log(rawData)

// 1. Käyttäjä valitsee yritystiedot
// 2. Käyttäjä valitsee yrityksen
// 3. Käyttäjä valitsee "Listaa yrityksen avoimet työpaikat"
// 4. Käyttäjä valitsee listalta työpaikan
// 5. Käyttäjä valitsee "Listaa työpaikkaan sopivia hakijoita"

//const rawData = {
//    "Alexa - Globaali sijoitus" : "",
//    "Digitalisaatioindeksi" : "0.49",
//    "Email" : "",
//    "FB PTAT" : "",
//    "FB engagement rate" : "",
//    "FB tykkääjät" : "",
//    "Facebook linkki" : "",
//    "Henkilöstömäärä (viimeisin)" : "16",
//    "Julkaisuja per päivä" : "",
//    "Kielet" : "En, Fi",
//    "Käyntiosoite" : "Uranuksenkuja 1 C",
//    "Käyntipostinumero" : "01480",
//    "Käyntipostitoimipaikka" : "VANTAA",
//    "Liikevaihto (viimeisin) EUR" : "1641706",
//    "LinkedIn linkki" : "",
//    "Linkki Vainuun" : "https://app.vainu.io/vainu/prospect/210110/",
//    "Osoite" : "Uranuksenkuja 1 C",
//    "Postinumero" : "01480",
//    "Postitoimipaikka" : "VANTAA",
//    "Puhelin" : "+358207631570",
//    "Päätoimiala" : "Koneiden ja laitteiden korjaus, huolto ja asennus  (33)",
//    "Rajoitettu markkinointiin" : "",
//    "Sisältömarkkinointi-indeksi" : "",
//    "SoMe-indeksi" : "0.12",
//    "Status" : "Aktiivinen",
//    "Status (active/inactive)" : "active",
//    "Teknologiat" : "Office365 email, Javascript, Visa, TLS v1.2, Jquery, Finnish, Tab Icon, Swiper Slider, SSL/TLS, MaxMind, PHP, Amazon web services, English, jQuery 1.12, American Express, Plesk, Osano, Facebook, Mysql, jsDelivr, WordPress 5.2, jQuery Migrate, Microsoft exchange, Nginx, Form Html Element, Wordpress, Outlook, WordPress 5, MasterCard, Google tag manager, Vimeo, Yoast SEO 12.3, Google font api, Elementor 2.7, Elementor, Website, Google Site Verification, _(\"Responsive\"), Yoast SEO, Cookie Consent By Insites",
//    "Tilintarkastaja" : "",
//    "Toimiala" : "Laivojen ja veneiden korjaus ja huolto  (33150)",
//    "Toimintaa maissa" : "FI",
//    "Twitter linkki" : "",
//    "Twitter seuraajat" : "",
//    "Työnantajarekisteriin liittymispäivä" : "01.04.1977",
//    "Vainu Custom Industry" : "Transportation",
//    "Vainu-indeksi" : "46.8721011",
//    "WWW-osoite" : "laivakone.fi",
//    "Y-tunnus" : "0110604-2",
//    "Yhtiömuoto" : "Osakeyhtiö",
//    "Youtube linkki" : "",
//    "Yrityksen rekisteröimispäivä" : "15.03.1978",
//    "Yritys" : "Laivakone Oy"
//}

const companyInfo = ref(rawData[0])

function selectCompany(event) {
    companyInfo.value = rawData.find((e) => e['Yritys'] === event.target.value)
}
</script>


<template>
<div class="searchwrapper">
    <p>Väliaikainen hakufunktio</p>
    <select name="optionlist" @change="selectCompany">
        <option v-for="d in rawData" :key="d['Y-tunnus']">{{ d['Yritys'] }}</option>
    </select>
</div>

<div class="wrapper">
    <CompanyInfo :raw-data="companyInfo"></CompanyInfo>
    <router-link class="joblink" to="/tyopaikat">Avoimet työpaikat</router-link>
</div>
</template>


<style scoped>
.joblink {
    text-decoration: none;
    height: 2rem;
    width: 50%;
    background-color: #cccccc;
    line-height: 2.2rem;
    color: black;
    border-radius: 2px;
    margin: 2rem auto 0 auto;
}
.searchwrapper {
    display: flex;
    height: 2rem;
    margin: 0 auto;
    justify-content: center;
    margin-top: 0.5rem;
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
</style>