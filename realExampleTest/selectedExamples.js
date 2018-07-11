	// Array of dynamic tags:

var autofillForms = {

	dynamicTags: null,

	getDynamicTags: function() {
		if(this.dynamicTags == null) {
			var prefString;
			if(this.autofillFormsPrefs.getBoolPref('useConfigDirectory')) {
				// Get the dynamicTags string from the dynamicTags file in the configDirectory:
				prefString = this.getFileContent(this.getDynamicTagsFile());
			}
			if(!prefString) {
				prefString = this.autofillFormsPrefs
									.getComplexValue('dynamicTags',Components.interfaces.nsIPrefLocalizedString)
									.data;
			}
			this.dynamicTags = prefString.split('\t');
		}
		return this.dynamicTags;
	},

	exportDynamicTagsToConfigDirectory: function() {
		var prefString;
		// Get the dynamicTags string from the preferences:
		prefString = this.autofillFormsPrefs
							.getComplexValue('dynamicTags',Components.interfaces.nsIPrefLocalizedString)
							.data;
		if(prefString) {
			this.setFileContent(this.getDynamicTagsFile(), prefString);
		}
	}

// 	moveConfigFiles: function(newDir) {
// 		if(this.checkConfigDirectoryOverwrite(newDir)) {
// 			this.moveFile(this.getFieldRulesFile(), newDir);
// 			this.moveFile(this.getDynamicTagsFile(), newDir);
// 			this.moveFile(this.getDynamicTagCodesFile(), newDir);
// 			this.moveFile(this.getProfileLabelsFile(), newDir);
// 			this.moveFile(this.getProfileSiteRulesFile(), newDir);
// 			return true;
// 		}
// 		return false;
// 	},

// 	replaceDynamicTags: function(fieldRuleValue) {
// 		// Replace all dynamic tags with the return values of their associated tag codes:
// 		for(var j=0; j<this.getDynamicTags().length; j++) {
// 			// Catch if the number of tags doesn't match the number of tag codes or if the tag code is invalid:
// 			try {
// 				var regExpObj = new RegExp(this.getDynamicTags()[j],'g');
// 				// We use eval() here without restrictions - the given tagCode must be trusted:
// 				fieldRuleValue = fieldRuleValue.replace(regExpObj, eval(this.getDynamicTagCodes()[j]));
// 			} catch(e) {
// 				this.log(e);
// 			}
// 		}
// 		return fieldRuleValue;
// 	},

	
// 	getDynamicTagsFile: function() {
// 		var file = this.getConfigDirectory();
// 		file.append('dynamicTags.txt');
// 		if(!file.exists()) {
// 			file.create(Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 0660);
// 		}
// 		return file;
// 	},

// 	exportDynamicTagsToConfigDirectory: function() {
// 		var prefString;
// 		// Get the dynamicTags string from the preferences:
// 		prefString = this.autofillFormsPrefs
// 							.getComplexValue('dynamicTags',Components.interfaces.nsIPrefLocalizedString)
// 							.data;
// 		if(prefString) {
// 			this.setFileContent(this.getDynamicTagsFile(), prefString);
// 		}
// 	},

// 	importDynamicTagsFromConfigDirectory: function() {
// 		var prefString;
// 		prefString = this.getFileContent(this.getDynamicTagsFile());
// 		if(prefString) {
// 			// Store the dynamicTags as unicode string in the preferences:
// 			this.autofillFormsPrefs.setComplexValue(
// 				'dynamicTags',
// 				Components.interfaces.nsISupportsString,
// 				this.getUnicodeString(prefString)
// 			);
// 		}
// 	},

// 	getDynamicTags: function() {
// 		if(this.dynamicTags == null) {
// 			var prefString;
// 			if(this.autofillFormsPrefs.getBoolPref('useConfigDirectory')) {
// 				// Get the dynamicTags string from the dynamicTags file in the configDirectory:
// 				prefString = this.getFileContent(this.getDynamicTagsFile());
// 			}
// 			if(!prefString) {
// 				prefString = this.autofillFormsPrefs
// 									.getComplexValue('dynamicTags',Components.interfaces.nsIPrefLocalizedString)
// 									.data;
// 			}
// 			this.dynamicTags = prefString.split('\t');
// 		}
// 		return this.dynamicTags;
// 	},

// 	setDynamicTags: function(dynamicTags) {
// 		// Save the dynamic tags separated by tabs:
// 		var prefString = dynamicTags.join('\t');
// 		if(this.autofillFormsPrefs.getBoolPref('useConfigDirectory')) {
// 			this.setFileContent(this.getDynamicTagsFile(), prefString);
// 		} else {
// 			this.autofillFormsPrefs.setComplexValue(
// 				'dynamicTags',
// 				Components.interfaces.nsISupportsString,
// 				this.getUnicodeString(prefString)
// 			);
// 		}
// 	},

// 	tagEditorInitialize: function() {
// 		// Save the reference to the Autofill Forms preferences branch:
// 		this.autofillFormsPrefs = this.getPrefManager().getBranch('extensions.autofillForms@blueimp.net.');

// 		// Add existing tags to the list:
// 		for(var i=0; i<this.getDynamicTags().length; i++) {
// 			// Catch if the number of tags doesn't match the number of tag codes:
// 			try {
// 				this.tagEditorAdd(this.getDynamicTags()[i],this.getDynamicTagCodes()[i])
// 			} catch(e) {
// 				this.log(e);
// 			}
// 		}
// 	},




// 	observe: function(subject, topic, data) {
// 		// Only observe preferences changes:
// 		if (topic != 'nsPref:changed')
// 			return;
// 		switch(data) {
// 			case 'profileIndex':
// 				// If set to null, the profileIndex will be updated on next getProfileIndex() call:
// 				this.profileIndex = null;
// 				this.tooltipCurrentProfile = null;
// 				break;
// 			case 'globalProfileIndex':
// 				// If set to null, the globalProfileIndex will be updated on next getGlobalProfileIndex() call:
// 				this.globalProfileIndex = null;
// 				break;
// 			case 'formFieldsContextMenuProfileIndex':
// 				// If set to null, the formFieldsContextMenuProfileIndex will be updated on next getFormFieldsContextMenuProfileIndex() call:
// 				this.formFieldsContextMenuProfileIndex = null;
// 				break;
// 			case 'profileLabels':
// 				// If set to null, the profileLabels will be updated on next getProfileLabels() call:
// 				this.profileLabels = null;
// 				this.tooltipCurrentProfile = null;
// 				break;
// 			case 'profileSiteRules':
// 				// If set to null, the profileSiteRules will be updated on next getProfileSiteRules() call:
// 				this.profileSiteRules = null;
// 				break;
// 			case 'shortcut':
// 				this.updateShortcut('shortcut');
// 				this.tooltipGrid = null;
// 				break;
// 			case 'shortcutSubmit':
// 				this.updateShortcut('shortcutSubmit');
// 				this.tooltipGrid = null;
// 				break;
// 			case 'shortcutAllTabs':
// 				this.updateShortcut('shortcutAllTabs');
// 				this.tooltipGrid = null;
// 				break;
// 			case 'shortcutFromProfileSelection':
// 				this.updateShortcut('shortcutFromProfileSelection');
// 				this.tooltipGrid = null;
// 				break;
// 			case 'shortcutProfile':
// 				this.updateShortcut('shortcutProfile');
// 				this.tooltipGrid = null;
// 				break;
// 			case 'shortcutSettings':
// 				this.updateShortcut('shortcutSettings');
// 				this.tooltipGrid = null;
// 				break;
// 			case 'shortcutDisplayFormDetails':
// 				this.updateShortcut('shortcutDisplayFormDetails');
// 				this.tooltipGrid = null;
// 				break;
// 			case 'mouseShortcut':
// 				if(this.mouseButton) {
// 					this.mouseButton['mouseShortcut'] = null;
// 					this.tooltipGrid = null;
// 				}
// 				break;
// 			case 'mouseShortcutSubmit':
// 				if(this.mouseButton) {
// 					this.mouseButton['mouseShortcutSubmit'] = null;
// 					this.tooltipGrid = null;
// 				}
// 				break;
// 			case 'mouseShortcutAllTabs':
// 				if(this.mouseButton) {
// 					this.mouseButton['mouseShortcutAllTabs'] = null;
// 					this.tooltipGrid = null;
// 				}
// 				break;
// 			case 'mouseShortcutFromProfileSelection':
// 				if(this.mouseButton) {
// 					this.mouseButton['mouseShortcutFromProfileSelection'] = null;
// 					this.tooltipGrid = null;
// 				}
// 				break;
// 			case 'mouseShortcutProfile':
// 				if(this.mouseButton) {
// 					this.mouseButton['mouseShortcutProfile'] = null;
// 					this.tooltipGrid = null;
// 				}
// 				break;
// 			case 'mouseShortcutSettings':
// 				if(this.mouseButton) {
// 					this.mouseButton['mouseShortcutSettings'] = null;
// 					this.tooltipGrid = null;
// 				}
// 				break;
// 			case 'mouseShortcutDisplayFormDetails':
// 				if(this.mouseButton) {
// 					this.mouseButton['mouseShortcutDisplayFormDetails'] = null;
// 					this.tooltipGrid = null;
// 				}
// 				break;
// 			case 'fieldRules':
// 				if(!this.autofillFormsPrefs.getBoolPref('useConfigDirectory')) {
// 					// If set to null, the fieldRules will be updated on next getFieldRules() call:
// 					this.fieldRules = null;
// 				}
// 				break;
// 			case 'storeEncrypted':
// 				// To update the stored data, we must decrypt or may not decrypt
// 				// the prefString in opposition to the setting which just changed -
// 				// the "invertedSetting" helper var helps to identify this situation:
// 				this.invertedSetting = true;
// 				// Store data encrypted/decrypted:
// 				this.setFieldRules();
// 				this.invertedSetting = false;
// 				break;
// 			case 'dynamicTags':
// 				// If set to null, the dynamicTags will be updated on next getDynamicTags() call:
// 				this.dynamicTags = null;
// 				break;
// 			case 'dynamicTagCodes':
// 				// If set to null, the dynamicTagCodes will be updated on next getDynamicTagCodes() call:
// 				this.dynamicTagCodes = null;
// 				break;
// 			case 'hideContextMenuItem':
// 				this.hideContextMenuItemUpdate();
// 				break;
// 			case 'hideFormFieldsContextMenu':
// 				this.hideContextMenuItemUpdate();
// 				break;
// 			case 'hideStatusbarIcon':
// 				this.hideStatusbarIconUpdate();
// 				break;
// 			case 'hideToolbarButton':
// 				this.hideToolbarButtonUpdate();
// 				this.hideToolbarButtonMenuUpdate();
// 				break;
// 			case 'hideToolbarButtonMenu':
// 				this.hideToolbarButtonMenuUpdate();
// 				break;
// 			case 'useConfigDirectory':
// 				if(this.autofillFormsPrefs.getBoolPref('useConfigDirectory')) {
// 					this.exportToConfigDirectory();
// 				} else {
// 					this.importFromConfigDirectory();
// 				}
// 				break;
// 		}
// 	},






// // Writing all dynamic tags as string to a file

// 	exportDynamicTags: function(dynamicTags, dynamicTagCodes) {
// 		try {
// 			var file = this.filePicker(
// 				'modeSave',
// 				this.getStringBundle().getString('exportDynamicTags'),
// 				this.getProfileLabel(this.getProfileIndex())+'.txt'
// 			);
// 			if(file) {
// 				var fos = Components.classes['@mozilla.org/network/file-output-stream;1'].
// 										createInstance(Components.interfaces.nsIFileOutputStream);
// 				fos.init(file, 0x02 | 0x08 | 0x20, 0664, 0); // write, create, truncate

// 				var os = Components.classes['@mozilla.org/intl/converter-output-stream;1']
// 							.createInstance(Components.interfaces.nsIConverterOutputStream);
// 				os.init(fos, 'UTF-8', 4096, Components.interfaces.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);


// 				var header = 'autofillForms@blueimp.net' + '\t'
// 								+ this.version + '\t'
// 								+ 'dynamictags\n';
// 				os.writeString(header);

// 				var cols;
// 				for(var i=0; i<dynamicTags.length; i++) {
// 					cols = dynamicTags[i]+'\t'+dynamicTagCodes[i];
// 					os.writeString('\n' + cols);
// 				}
// 				os.close();
// 				fos.close();
// 			}
// 		} catch(e) {
// 			this.log(e);
// 		}
// 	},

// 	exportDynamicTagsFromTagEditor: function() {
// 		var richlistbox = document.getElementById('tagList');
// 		if(richlistbox) {
// 			var richlistitems = richlistbox.getElementsByTagName('richlistitem');
// 			var textboxes;

// 			var dynamicTags = new Array();
// 			var dynamicTagCodes = new Array();

// 			// Go through the richlistbox items:
// 			for(var i=0; i<richlistitems.length; i++) {
// 				textboxes = richlistitems[i].getElementsByTagName('textbox');

// 				// Add the dynamic tags and their associated tag codes to the lists:
// 				if (textboxes[0].value != '' && textboxes[1].value != '') {
// 					dynamicTags.push(this.makeSafe(textboxes[0].value));
// 					dynamicTagCodes.push(this.makeSafe(textboxes[1].value));
// 				}
// 			}
// 			this.exportDynamicTags(dynamicTags, dynamicTagCodes);
// 		}
// 	},

}