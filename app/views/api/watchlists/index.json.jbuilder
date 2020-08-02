@watchlist_assets.each do |watchlist_asset|
    json.set! watchlist_asset.ticker do
        json.extract! watchlist_asset, :id, :user_id, :ticker, :asset_name
    end
end