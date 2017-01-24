sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcampWebApp1_JCL.controller.myView_app1", {
		
		
		onInit : function () {
				var i18nModel = new ResourceModel({
					bundleName: "sap.ui.bootcampWebApp1_JCL.i18n.i18n"
				});
				
				this.getView().setModel(i18nModel,"i18n");
		
				var oData = {
					field : {
						username : "Username"
					}
				};
				var oModel = new JSONModel(oData);
				this.getView().setModel(oModel);
			}, 
		
		onLoginPress: function(){
/*			var oTextField = this.getView().byId("Username");
			// sap.m.MessageToast.show("Sup World!" + oTextField.getValue());
			var oInputField = this.getView().byId("Password");
			 //sap.m.MessageToast.show("Sup World!" + oInputField.getValue());
			 //sap.m.MessageToast.show("Sup World!");
			
			// this.getView().byId("username").getValue();
			if(oTextField.getValue() === " " || oInputField.getValue() === ""){	
			sap.m.MessageToast.show("Username and Password should not be null");
			}
			
			if(oInputField.getValue().length > 8){
			sap.m.MessageToast.show("Username should only be up to 8 characters");	
			}*/
			
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient  = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg",[sRecipient]);
			sap.m.MessageToast.show(sMsg);
		}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcampWebApp1_JCL.view.myView_app1
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcampWebApp1_JCL.view.myView_app1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcampWebApp1_JCL.view.myView_app1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcampWebApp1_JCL.view.myView_app1
		 */
		//	onExit: function() {
		//
		//	}

	});

});