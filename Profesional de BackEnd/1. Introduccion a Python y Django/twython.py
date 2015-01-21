from twython import Twython
usuario = "ajamaica"
twitter = Twython()
followers = twitter.getFollowersIDs( screen_name = usuario )

for follower_id in followers :
    print "Usuarios %d sigue a %s" % (follower_id, usuario)

tweets = twitter.getPublicTimeline()

for tweet in tweets :
    print tweet['user']['name'].encode('utf-8')
    print tweet['text'].encode('utf-8')

results = twitter.getDailyTrends()

for i in range(0,100) :
    print i

for time, trend_list in results['trends'].iteritems() :
    print time
    for trend in trend_list :
        print trend['query']