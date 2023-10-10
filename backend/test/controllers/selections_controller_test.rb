require "test_helper"

class SelectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @selection = selections(:one)
  end

  test "should get index" do
    get selections_url, as: :json
    assert_response :success
  end

  test "should create selection" do
    assert_difference("Selection.count") do
      post selections_url, params: { selection: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show selection" do
    get selection_url(@selection), as: :json
    assert_response :success
  end

  test "should update selection" do
    patch selection_url(@selection), params: { selection: {  } }, as: :json
    assert_response :success
  end

  test "should destroy selection" do
    assert_difference("Selection.count", -1) do
      delete selection_url(@selection), as: :json
    end

    assert_response :no_content
  end
end
