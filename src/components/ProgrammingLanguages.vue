<template>
    <div class="my-8">
        <p class="code-style">Languages I work with:</p>
        <v-row class="mx-0 my-0">
            <v-col>
                <v-img src="@/assets/html.svg" height="70" width="70" contain class="mx-auto pro-lang"></v-img>
            </v-col>
            <v-col>
                <v-img src="@/assets/css.svg" height="70" width="70" contain class="mx-auto pro-lang"></v-img>
            </v-col>
            <v-col>
                <v-img src="@/assets/js.svg" height="70" width="70" contain class="mx-auto pro-lang"></v-img>
            </v-col>
            <v-divider vertical  class="divider-border"></v-divider>
            <v-col>
                <v-img src="@/assets/python.svg" height="70" width="70" contain class="mx-auto pro-lang"></v-img>
            </v-col>
            <v-col>
                <v-img src="@/assets/c.svg" height="70" width="70" contain class="mx-auto pro-lang"></v-img>
            </v-col>
            <v-col>
                <v-img src="@/assets/cpp.svg" height="70" width="70" contain class="mx-auto pro-lang"></v-img>
            </v-col>
            <v-col>
                <v-img src="@/assets/php.svg" height="70" width="70" contain class="mx-auto pro-lang"></v-img>
            </v-col>
            <v-divider vertical class="divider-border"></v-divider>
            <v-col>
                <v-img src="@/assets/vuejs.svg" height="70" width="70" contain class="mx-auto pro-lang"></v-img>
            </v-col>
            <v-col>
                <v-img src="@/assets/flutter.svg" height="70" width="70" contain class="mx-auto pro-lang"></v-img>
            </v-col>
            <v-col>
                <v-img src="@/assets/wp.svg" height="70" width="70" contain class="mx-auto pro-lang"></v-img>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "c-programming-languages"
}
</script>

<style>
.pro-lang {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    transition: 0.5s;
}
.pro-lang:hover {
    filter: none;
    -webkit-filter: grayscale(0);
}
</style>