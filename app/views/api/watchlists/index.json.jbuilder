@watchlist_assets.each do |watchlist_asset|
    json.set! watchlist_asset.id do
        json.extract! watchlist_asset, :id, :user_id, :ticker
    end
end