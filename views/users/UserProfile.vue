<template>
	<div>
		<page-title-bar></page-title-bar>
		<v-container fluid class="grid-list-xl pt-0 mt-n3">
			<v-row>
				<v-col cols="12" md="12" lg="12" sm="12" class="col-height-auto">
					<div>
						<user-detail></user-detail>
						<div class="profile-body">
							<v-row>
								<v-col cols="12" md="5" lg="4" class="col-height-auto">
									<app-card
										customClasses="mb-30"
									>
										<contact-request></contact-request>
									</app-card>
									<app-card
										heading="Education"
										customClasses="mb-30"
										:fullScreen="true" 
										:reloadable="true" 
										:closeable="true"
										:fullBlock="true"
									>
										<education></education>
									</app-card>
									<app-card
										heading="skills"
										customClasses="warning white--text heading-light mb-30"
										:fullScreen="true" 
										:reloadable="true" 
										:closeable="true"
										:fullBlock="true"
									>
										<skills></skills>
									</app-card>
								</v-col>
								<v-col cols="12" md="7" lg="8">
									<app-card
										heading="Activity"
									>
										<user-activity></user-activity>
									</app-card>
								</v-col>
							</v-row>
						</div>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import UserDetail from "Components/Widgets/UserDetail";
import Skills from "Components/Widgets/Skills";
import Education from "Components/Widgets/Education";
import ContactRequest from "Components/Widgets/ContactRequest";
import UserActivity from "Components/Widgets/UserActivity";

export default {
  components: {
    UserDetail,
    Skills,
    Education,
    ContactRequest,
    UserActivity
  }
};
</script>
