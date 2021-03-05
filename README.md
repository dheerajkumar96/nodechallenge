# nodechallenge

#Download or clone the project in local.

#npm install

#npm audit fix

#npm start

#included postman.json in folder, import into postman to test the api's in local.
# Used sql server as database
# Written unit test cases using chai/mocha
# Deployed the same on azure as an appservice (link : https://sampleappaaa.azurewebsites.net)
# db table schema

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tickets](
	[ticketid] [int] IDENTITY(1,1) NOT NULL,
	[creation] [datetime] NULL,
	[customer] [nvarchar](100) NULL,
	[performance] [nvarchar](100) NULL,
	[performancetime] [datetime] NULL,
	[ticket] [int] NULL,
	[isDeleted] [bit] NULL
) ON [PRIMARY]
GO
