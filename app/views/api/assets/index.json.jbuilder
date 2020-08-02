@assets.each do |asset|
    json.set! asset.id do
        json.extract! asset, :id, :asset_name, :ticker
    end
end