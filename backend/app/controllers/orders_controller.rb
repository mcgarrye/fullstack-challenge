class OrdersController < ApplicationController
  before_action :set_order, only: %i[ show update destroy ]

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders.to_json(
      :include => {:selections => {:include => :pizza  }}
    )
  end

  # GET /orders/1
  def show
    render json: @order.to_json(
      :include => {:selections => {:include => :pizza  }}
    )
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      params["selections"]&.each do |selection|
        Selection.create!(pizza_id: selection["pizza_id"], order: @order, quantity: selection["quantity"])
      end
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.require(:order).permit(:name)
    end
end
