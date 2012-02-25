Ext.define('GuideToAmerica.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            editButton: '#editButton',
            categories: 'categories',
            showCategory: 'category-show',
            editCategory: 'category-edit',
            saveButton: '#saveButton'
        },

        control: {
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            editButton: {
                tap: 'onCategoryEdit'
            },
            categories: {
                itemtap: 'onCategorySelect'
            },
            saveButton: {
                tap: 'onCategorySave'
            },
            editCategory: {
                change: 'onCategoryChange'
            }
        }
    },

    onMainPush: function(view, item) {
        var editButton = this.getEditButton();

        if (item.xtype == "category-show") {
            this.getcategories().deselectAll();

            this.showEditButton();
        } else {
            this.hideEditButton();
        }
    },

    onMainPop: function(view, item) {
        if (item.xtype == "category-edit") {
            this.showEditButton();
        } else {
            this.hideEditButton();
        }
    },

    onCategorySelect: function(list, index, node, record) {
        var editButton = this.getEditButton();

        if (!this.showCategory) {
            this.showCategory = Ext.create('GuideToAmerica.view.tip.Show');
        }

        // Bind the record onto the show category view
        this.showCategory.setRecord(record);

        // Push the show category view into the navigation view
        this.getMain().push(this.showCategory);
    },

    onCategoryEdit: function() {
        if (!this.editCategory) {
            this.editCategory = Ext.create('GuideToAmerica.view.category.Edit');
        }

        // Bind the record onto the edit category view
        this.editCategory.setRecord(this.getShowCategory().getRecord());

        this.getMain().push(this.editCategory);
    },

    onCategoryChange: function() {
        this.showSaveButton();
    },

    onCategorySave: function() {
        var record = this.getEditCategory().saveRecord();

        this.getShowCategory().updateRecord(record);

        this.getMain().pop();
    },

    showEditButton: function() {
        var editButton = this.getEditButton();

        if (!editButton.isHidden()) {
            return;
        }

        this.hideSaveButton();

        //show the edit button and then fade it in
        editButton.show();

        if (!Ext.os.is.Android) {
            Ext.Animator.run({
                element: editButton.element,
                from: {
                    opacity: 0
                },
                to: {
                    opacity: 1
                }
            });
        }
    },

    hideEditButton: function() {
        var editButton = this.getEditButton();

        if (editButton.isHidden()) {
            return;
        }

        //fade the edit button out then hdie it
        if (Ext.os.is.Android) {
            editButton.hide();
        } else {
            Ext.Animator.run({
                element: editButton.element,
                from: {
                    opacity: 1
                },
                to: {
                    opacity: 0
                },
                onEnd: function() {
                    editButton.hide();
                }
            });
        }
    },

    showSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (!saveButton.isHidden()) {
            return;
        }

        //show the edit button and then fade it in
        saveButton.show();

        if (!Ext.os.is.Android) {
            Ext.Animator.run({
                element: saveButton.element,
                from: {
                    opacity: 0
                },
                to: {
                    opacity: 1
                }
            });
        }
    },

    hideSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (saveButton.isHidden()) {
            return;
        }

        //fade the edit button out then hdie it
        if (Ext.os.is.Android) {
            saveButton.hide();
        } else {
            Ext.Animator.run({
                element: saveButton.element,
                from: {
                    opacity: 1
                },
                to: {
                    opacity: 0
                },
                onEnd: function() {
                    saveButton.hide();
                }
            });
        }
    }
});
