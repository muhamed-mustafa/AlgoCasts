import 'package:flutter/services.dart' show rootBundle;
import '../domain/trip.dart';

abstract class TripsRepository {
  Future<List<Trip>> fetchTrips();
}

class AssetsTripsRepository implements TripsRepository {
  final String assetPath;

  const AssetsTripsRepository({this.assetPath = 'assets/data/trips_mock.json'});

  @override
  Future<List<Trip>> fetchTrips() async {
    final String content = await rootBundle.loadString(assetPath);
    return Trip.listFromJsonString(content);
  }
}
