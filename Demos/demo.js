// Get some mailboxes
var data = {
	"mailboxes":[
		{
			"name":"inbox",
			"messages":[
				{
					"from":"Your Mom <mom@email.com>",
					"to":"You <you@email.com>",
					"subject":"Howdy! 1",
					"body":"Lorem ipsum dolor sit amet"
				},
				{
					"from":"Your Mom <mom@email.com>",
					"to":"You <you@email.com>",
					"subject":"Howdy! 2",
					"body":"Lorem ipsum dolor sit amet"
				},
				{
					"from":"Your Mom <mom@email.com>",
					"to":"You <you@email.com>",
					"subject":"Howdy! 3",
					"body":"Lorem ipsum dolor sit amet"
				}
			]
		},
		{
			"name":"archived",
			"messages":[
				{
					"from":"Your Mom <mom@email.com>",
					"to":"You <you@email.com>",
					"subject":"Howdy! 4",
					"body":"Lorem ipsum dolor sit amet"
				},
				{
					"from":"Your Mom <mom@email.com>",
					"to":"You <you@email.com>",
					"subject":"Howdy! 5",
					"body":"Lorem ipsum dolor sit amet"
				},
				{
					"from":"Your Mom <mom@email.com>",
					"to":"You <you@email.com>",
					"subject":"Howdy! 6",
					"body":"Lorem ipsum dolor sit amet"
				}
			]
		}
	]
}


// Create a controller and link to the data
var MailboxesController = new SubtleController.Array(data);
var MessagesController = new SubtleController.Array(MailboxesController.getSelection);

MailboxesController.get('name');
MailboxesController.get('messages');


// Bind the html element #mailboxes to the mailboxes



// Bind the html element #messages to the selected mailbox's messages



// The #messages should update when the selected mailbox changes



MailboxesController.setSelection(1);
