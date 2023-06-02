<template>
    <v-container id="community-projects">
        <v-row class="main-container">
            <v-col class="px-0 py-0">
                <v-row class="mx-0 mb-4 my-0 align-center">
                    <p class="code-style darkText section-heading my-0">02.05 - Community Projects</p>
                    <v-divider class="ml-4"></v-divider>
                </v-row>
                <v-row class="mx-0 mb-4 my-0 align-center">
                    <p class="code-style darkText section-heading my-0">02.05.01 - Teaching</p>
                    <v-divider class="ml-4"></v-divider>
                </v-row>
                <v-card elevation="10">
                    <v-tabs :vertical="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)" background-color="darkLight">
                        <v-tab class="justify-start">
                            <img src="@/assets/hu.png" height="20" class="mr-2" alt="" />
                            Habib University
                        </v-tab>

                        <v-tab class="justify-start">
                            <img src="@/assets/hu.png" height="20" class="mr-2" alt="" />
                            Habib University
                        </v-tab>

                        <v-tab-item>
                            <v-card flat class="darkLight">
                                <v-card-text class="card-text">
                                    <p>Teaching Assistant @ Habib University</p>
                                    <ul class="code-style">
                                        <li>Computer Architecture (Spring 2022)</li>
                                        <li>Computer Architecture (Spring 2021)</li>
                                        <li>Data Structures & Algorithms (Spring 2020)</li>
                                    </ul>
                                    <p class="mt-4">Assisted students during labs, and helped them to solve their queries on assignments, labs, and lectures.</p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item>
                            <v-card flat class="darkLight">
                                <v-card-text class="card-text">
                                    <p>Peer Tutor @ Habib University</p>
                                    <ul class="code-style">
                                        <li>Peer Tutor for C++ (Summer 2020)</li>
                                        <li>Peer Tutor for C++ (Winter 2020)</li>
                                    </ul>
                                    <p class="mt-4">Prepared and delivered an introductory course for the relevant subject to help the students in their future courses.</p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
                <v-row class="mx-0 my-4 my-0 align-center">
                    <p class="code-style darkText section-heading my-0">02.05.02 - Development</p>
                    <v-divider class="ml-4"></v-divider>
                </v-row>
                <v-card elevation="10">
                    <v-tabs :vertical="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)" background-color="darkLight">
                        <v-tab class="justify-start">
                            <img src="@/assets/saaya.png" height="20" class="mr-2" alt="" />
                            Saaya Pakistan
                        </v-tab>

                        <v-tab class="justify-start">
                            <img src="@/assets/saaya.png" height="20" class="mr-2" alt="" />
                            Saaya Pakistan
                        </v-tab>

                        <v-tab-item>
                            <v-card flat class="darkLight">
                                <v-card-text class="card-text">
                                    <p>IT Consultant @ Saaya Pakistan</p>
                                    <p class="code-style">August 2020 - Present</p>
                                    <ul class="mb-4">
                                        <li>Voluntarily maintain Saaya Pakistan's (NGO) website including optimizing it, updating the content, and continuously adding required features.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item>
                            <v-card flat class="darkLight">
                                <v-card-text class="card-text">
                                    <p>Web Developer @ Saaya Pakistan</p>
                                    <p class="code-style">June 2020 - August 2020</p>
                                    <ul class="mb-4">
                                        <li>Developed a website for Saaya Pakistan NGO using WordPress as a voluntary project.</li>
                                        <li>Designed and customized the website to meet the organization's needs and specifications.</li>
                                        <li>Incorporated responsive design and ensured website accessibility.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    name: "c-community-projects",
};
</script>
  
<style>

</style>