#  @assets.each do |asset|
#     json.set! asset.ticker do
#         json.extract! asset, :id, :asset_name, :ticker
#     end
# end

json.data(@assets) do |asset|
    # json.set! asset.asset_name do
        json.ticker asset.ticker
        json.companyName asset.asset_name
    # end
end