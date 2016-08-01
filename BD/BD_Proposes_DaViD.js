var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectEntity = new Schema({
	users:  [{							// Related to ‘UsersCollection’
		userNameLink: Number,
		required: true
	}],

	technologies: [{					// Related to ‘TechnologiesCollection’
		techNameLink: Number
		required: true
	}],

	projectName: {type: String,	required: true}			// Unique

	descriptions: [{
			date: Date,
			descrText: String,
			images: [{
				img: Binary
			}]
			attachments: [{
				name: String,
				date: Date,
				att: Binary
			}]
	}],

	
	screenshots: [{
		internal: Boolean,				//Internal: true, External: false
		linkToSource: String,			// if ‘internal’ == false
		shot: Binary,
	}],	

	begin-end-Time: {
			begin: Date,
			end: Date
	},

	tags: [{							// Related to ‘TagsCollection’
			fromCollection: Boolean,	// ‘true’ if selected from ‘TagsCollection’
			tagNameLink: Number,		// if ‘fromCollection’ is ‘true’
			tagName: String
	}],

	stage: {					// Related to ‘stagesCollection’
			stageNameLink: Number
	},

	estimation: [{
		value: Number,
		date: Date,
		description: String
	}]

})

var RequestedProjectEntity = new Schema({
	
	projectName: {type: String, required: true}
		
	descriptions: [{
			date: Date,
			descrText: String
	}],

	tags: [{							// Related to ‘TagsCollection’
			fromCollection: Boolean,	// ‘true’ if selected from TagsCollection
			tagNameLink: Number,		// if ‘fromCollection’ is ‘true’
			tagName: String
	}],

	technologies: [{					// Related to ‘TechnologiesCollection’
			techNameLink: Number,
			required: true
	}],

	conditions: {						// Related to ‘ConditionCollection’
			conditionNameLink: Number,
			required: true
	},
	
	screenshots: [{
			internal: Boolean,				//Internal: true, External: false
			linkToSource: String,				// if ‘internal’ == false
			shot: Binary,
	}]
})


var User = new Schema({

		_id: ObjectId,
		login: String,
		userName: String,
		userSurname: String,
		avatar: Binary,
		authHash: String
})


var Technology = new Schema({

		_id: ObjectId,
		techName: String,
		techAvatar: Binary
})


var Tag = new Schema({

		_id: ObjectId,
		tagName: String,
		tagLinks: [String]
})


var Stage = new Schema({

		_id: ObjectId,

		stageName: String,

		comissioned: Date,

		decomissioned: Date
})


var Condition = new Schema({
										// ‘In Progress’ / ‘Estimated’ / ‘Discussed’
		_id: ObjectId,

		conditionName: String,

		conditionDescription: String,

		comissioned: Date,

		decomissioned: Date
}

})