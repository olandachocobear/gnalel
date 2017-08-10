CREATE TABLE [dbo].[Bids](
	[bid_id] [int] IDENTITY(1,1) NOT NULL,
	[auc_id] [varchar](10) NOT NULL,
	[date] [datetime] NOT NULL,
	[nominal] [int] NOT NULL,
	[bidder_id] [varchar](20) NOT NULL,
 CONSTRAINT [PK_Bids] PRIMARY KEY CLUSTERED 
(
	[bid_id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO