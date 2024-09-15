quote_index_mapping = {
    "mappings": {
        "properties": {
            "Quote_ID":{
                "type":"text"
            },
            "QuoteVector":{
                "type":"dense_vector",
                "dims":768,
                "index":True,
                "similarity":"cosine"
            },
        }
    }
}