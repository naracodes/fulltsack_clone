@assets.each do |asset|
    json.set! asset.ticker do
        json.extract! asset, :id, :asset_name, :ticker, :latest_price
    end
end