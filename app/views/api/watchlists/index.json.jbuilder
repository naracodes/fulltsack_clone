@watchlist_assets.each do |watchlist_asset|
    # debugger
    json.set! watchlist_asset.ticker do
        # debugger
        json.extract! watchlist_asset, :id, :user_id, :ticker, :asset_name, :latest_price, :asset_id
    end
end