<script>
 const props=defineProps({
    receta :{
        type : Object
    }
 })
</script>
<template>
    <div>
        <h2>{{receta.strDrink}}</h2>
    </div>
</template>
