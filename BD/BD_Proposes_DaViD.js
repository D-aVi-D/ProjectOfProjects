var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectEntity = new Schema({
	users:  [{							// Related to ‘UsersCollection’
		userNameLink: Schema.UsersCollection._id,
		required: true
	}],

	technologies: [{					// Related to ‘TechnologiesCollection’
		techNameLink: Schema.TechnologiesCollection._id
		required: true
	}],

	projectName: {type: String,	required: true}			// Unique

	descriptions: [{
		date: {type: Date, default: Date.now},
		descrText: String,
		images: [{
			img: Buffer
		}]
		attachments: [{
			name: String,
			date: {type: Date, default: Date.now},
			att: Buffer
		}]
	}],

	screenshots: [{
		internal: Boolean,							//Internal: true, External: false
		linkToSource: String,						// if ‘internal’ == false
		shot: Buffer,
	}],	

	begin-end-Time: {
			begin: {type: Date, default: Date.now, required: true},
			end: Date
	},

	tags: [{											// Related to ‘TagsCollection’
			fromCollection: Boolean,					// ‘true’ if selected from ‘TagsCollection’
			tagNameLink: Schema.TagsCollection._id,		// if ‘fromCollection’ is ‘true’
			tagName: String
	}],

	stage: {											// Related to ‘StagesCollection’
			stageNameLink: Schema.StagesCollection._id
	},

	estimation: [{
		value: Number,
		date: {type: Date, default: Date.now},
		description: String
	}]

})

var RequestedProjectEntity = new Schema({
	
	projectName: {type: String, required: true}
		
	descriptions: [{
			date: {type: Date, default: Date.now},
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
			internal: Boolean,			//Internal: true, External: false
			linkToSource: String,		// if ‘internal’ == false
			shot: Buffer,
	}],
	features: [Feature]
})


var User = new Schema({

		_id: ObjectId,
		login: String,
		userName: String,
		userSurname: String,
		avatar: Buffer,
		authHash: String,
		rights: [String]
})


var Technology = new Schema({

		_id: ObjectId,
		techName: String,
		techAvatar: Buffer
})


var Tag = new Schema({

		_id: ObjectId,
		tagName: String,
		tagLinks: [String]
})


var Stage = new Schema({

		_id: ObjectId,
		stageName: String,
		comissioned: {type: Date, required true},
		decomissioned: Date
})


var Condition = new Schema({
										// ‘In Progress’ / ‘Estimated’ / ‘Discussed’
		_id: ObjectId,
		conditionName: String,
		conditionDescription: String,
		comissioned: {type: Date, required true, default: Date.now},
		decomissioned: Date
	}
})


var Section = new Schema({
										// ‘In Progress’ / ‘Estimated’ / ‘Discussed’
		_id: ObjectId,
		sectionName: String,
		sectionDescription: String,
		opened: {type: Date, required true, default: Date.now}
		closed: Date,
		features: [Schema.Feature._id]
	}
})


var Feature = new Schema({
		_id: ObjectId,
		featureName: String,
		featureOrder: String,
		isNecessary: Boolean,							// 'true' == Necessary, 'false' == Desirable
		featureDescription: {
			images: [{shortName: String, binBody: Buffer}],
			extImagesLinks: [String],
			attachments: [{fileName: String, binBody: Buffer}],
			extLinks: [String],
			lists: [[String]]
		},
		created: {type: Date, default: Date.now},
		isImplemented: Boolean,
		childFeatures: [SubFeature]
})


var SubFeature = new Schema({
		_id: ObjectId,
		subFeatureName: String,
		subFeatureOrder: String,
		isNecessary: Boolean,							// 'true' == Necessary, 'false' == Desirable
		subFeatureDescription: {
			images: [{shortName: String, binBody: Buffer}],
			extImagesLinks: [String],
			attachments: [{fileName: String, binBody: Buffer}],
			extLinks: [String],
			lists: [[String]]
		},
		created: {type: Date, default: Date.now},
		isImplemented: Boolean
})