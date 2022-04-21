CREATE VERTEX SocialMediaPosts(PRIMARY_ID id STRING, text STRING, description STRING, confidence INT, sentiment INT, social_karma INT) WITH primary_id_as_attribute="true"


CREATE VERTEX CyberBullying(PRIMARY_ID tweet_id STRING, user_id STRING, Bullying_Traces STRING, Type STRING, Form STRING, Teasing STRING,Author_Role STRING, Emotion STRING ) WITH primary_id_as_attribute="true"
