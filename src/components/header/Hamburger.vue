<script setup>
</script>


<template>
<div class="hamburger">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>
</template>


<style scoped>
.hamburger {
    width: 2.2rem;
    height: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    margin-top:  0.9rem;
    margin-left:  0.8rem;
}

.line {
    border-top: 3px solid white;
}
</style>