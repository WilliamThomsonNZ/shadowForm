import S from '@sanity/desk-tool/structure-builder';

export default () =>
    S.list()
        .title('Content')
        .items([
            ...S.documentTypeListItems().filter(
                listItem =>
                    !['formSubmission'].includes(
                        listItem.getId()
                    )
            ),
            S.divider(),
            S.listItem()
                // Give it a title
                .title('Form Submissions')
                .child(
                    // Make a list in the second pane called Portfolio
                    S.list()
                        .title('Form Submissions')
                        .items([
                            // Add the first list item
                            S.listItem()
                                .title('All Submissions')
                                // This automatically gives it properties from the project type
                                .schemaType('formSubmission')
                                // When you open this list item, list out the documents
                                // of the type “project"
                                .child(S.documentTypeList('formSubmission').title('Form Submission')),
                            S.listItem()
                                .title('Artist Submissions')
                                // This automatically gives it properties from the project type
                                .schemaType('formSubmission')
                                // When you open this list item, list out the documents
                                // of the type “project"
                                .child(S.documentTypeList('formSubmission').title('Form Submission').filter('"Artist" in selectedRoles[]')),
                            S.listItem()
                                .title('Founder Submissions')
                                // This automatically gives it properties from the project type
                                .schemaType('formSubmission')
                                // When you open this list item, list out the documents
                                // of the type “project"
                                .child(S.documentTypeList('formSubmission').title('Form Submission').filter('"Founder" in selectedRoles[]')),

                            S.listItem()
                                .title('Developer Submissions')
                                // This automatically gives it properties from the project type
                                .schemaType('formSubmission')
                                // When you open this list item, list out the documents
                                // of the type “project"
                                .child(S.documentTypeList('formSubmission').title('Form Submission').filter('"Developer" in selectedRoles[]')),
                            S.listItem()
                                .title('Alpha Caller Submissions')
                                // This automatically gives it properties from the project type
                                .schemaType('formSubmission')
                                // When you open this list item, list out the documents
                                // of the type “project"
                                .child(S.documentTypeList('formSubmission').title('Form Submission').filter('"Alpha Caller" in selectedRoles[]')),
                            S.listItem()
                                .title('Project Manager Submissions')
                                // This automatically gives it properties from the project type
                                .schemaType('formSubmission')
                                // When you open this list item, list out the documents
                                // of the type “project"
                                .child(S.documentTypeList('formSubmission').title('Form Submission').filter('"Project Manager" in selectedRoles[]')),
                            S.listItem()
                                .title('Brand Manager Submissions')
                                // This automatically gives it properties from the project type
                                .schemaType('formSubmission')
                                // When you open this list item, list out the documents
                                // of the type “project"
                                .child(S.documentTypeList('formSubmission').title('Form Submission').filter('"Brand Manager" in selectedRoles[]')),
                        ])
                ),
        ])