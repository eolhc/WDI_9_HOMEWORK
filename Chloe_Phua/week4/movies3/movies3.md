# Movies 3: Return of Son of Movies

A more more advanced version of the Movies Sinatra App

## Summary

The people at OMDB have complained that our site is making too many requests for Jaws. Update your movies app to store OMDB data in your own local database.

The first time a movie is searched for, your app will put results from OMDB as before. But those results will need to be stored locally so that subsequent requests for the same title can be served from YOUR database, without bothering the OMDB guys again.

Use activerecord. Seriously

#check search result against existing searched items
#if not previously searched, get from OMDB
#if previously searched, save results for each search result
#save info
