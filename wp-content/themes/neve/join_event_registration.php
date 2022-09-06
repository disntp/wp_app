<?php
/*
Template Name: Book Registration Form
*/
get_header(); 
$current_user = wp_get_current_user();
global $wpdb;
$result = $wpdb->get_results("select * from booking where email='$current_user->user_email'");
if ( !empty($result) && is_user_logged_in()) : 
    // if ( $result->num_rows > 0 ) : 
?>
	 <div class="container page-section">
        <h1 class="text-center text-success">You have been booked!</h1>
        <?php
                global $wpdb;
                $result = $wpdb->get_results("select * from booking where email='$current_user->user_email'");
            ?>
            <table class="table table-striped"> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Seating</th>
                        <th>Number of Ticket</th>

                    </tr>
                    <tbody></tbody>
                    <?php
                    foreach ($result as $item) {?>
                    <tr>
                        <td><?php echo $item->name; ?></td>
                        <td><?php echo $item->email; ?></td>
                        <td><?php echo $item->phone; ?></td>
                        <td><?php echo $item->seating; ?></td>
                        <td><?php echo $item->amount_ticket; ?></td>

                    </tr>
                    <?php } ?>
                </thead>
            </table>
    </div>
<?php
// endif;
elseif(is_user_logged_in() && empty($result)):
    ?>

<div class="container page-section">
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">
                <h3 class="pb-2 align-center text-center">Registration Concert Event</h3>
                <form role="form" method="post">
				<?php 
                print_r($result);
			    $current_user = wp_get_current_user();
		?>
					<div class="form-group">
						<input type="email" id="email" name="email" placeholder="Email" class="form-control input-sm" require="" value="<?php echo $current_user->user_email; ?>" disabled="true"
>
					</div>
					<div class="form-group">
						<input type="text" id="name" name="name" placeholder="Name" class="form-control input-sm" require="">
					</div>
					<div class="form-group">
						<input type="tel" id="phone" name="phone" placeholder="Phone Number" class="form-control input-sm" require="" pattern="[0-9]{10}">
					</div>
					<div class="form-group">
					<h5>Seating options: </h5>
					<input type="radio" id="front" name="seating" value="front" require="">
					<label for="html">Front Stage</label><br>
					<input type="radio" id="middle" name="seating" value="middle" require="">
					<label for="css">Middle Stage</label><br>
					<input type="radio" id="balcony" name="seating" value="balcony" require="">
					<label for="javascript">Balcony</label>
					</div>
					<div class="form-group">
						<input type="number" id="amount_ticket" name="amount_ticket" placeholder="Number of tickets" class="form-control input-sm" require="" >
					</div>
					<div class="row justify-content-center">
						<div class="col-xs-4 col-sm-4 col-md-4">
							<input type="submit" value="Submit" class="btn btn-info btn-block" name="submitbtn">
						</div>
					</div>
				</form>
			</main><!-- #main -->
		</div><!-- #primary -->
		<?php
		// if ( graduate_is_sidebar_enable() ) {
		// 	get_sidebar();
		// } ?>
		</div><!-- .container -->
    <?php    endif;
get_footer();
